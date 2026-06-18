/**
 * Sync all Google Business reviews to data/google-reviews-cache.json
 * Run: node scripts/sync-google-reviews.mjs
 *
 * Requires in .env.local:
 *   GOOGLE_OAUTH_CLIENT_ID
 *   GOOGLE_OAUTH_CLIENT_SECRET
 *   GOOGLE_OAUTH_REFRESH_TOKEN
 *   NEXT_PUBLIC_GOOGLE_PLACE_ID
 * Optional: GOOGLE_BUSINESS_LOCATION_NAME=accounts/.../locations/...
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  const env = {};
  for (const line of content.split("\n")) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, "");
  }
  return env;
}

async function getAccessToken(env) {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_OAUTH_CLIENT_ID,
      client_secret: env.GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: env.GOOGLE_OAUTH_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function apiGet(url, token) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`${url} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function resolveLocation(env, token) {
  if (env.GOOGLE_BUSINESS_LOCATION_NAME) return env.GOOGLE_BUSINESS_LOCATION_NAME;

  const placeId = env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const accounts = await apiGet(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    token,
  );

  for (const account of accounts.accounts ?? []) {
    const locations = await apiGet(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,metadata`,
      token,
    );
    for (const loc of locations.locations ?? []) {
      if (loc.metadata?.placeId === placeId) return loc.name;
    }
  }
  throw new Error("Location not found for Place ID");
}

function starToNum(star) {
  return { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[star] ?? 5;
}

async function fetchAllReviews(locationName, token) {
  const reviews = [];
  let pageToken;
  let rating = 5;
  let totalRatings = 0;

  do {
    const url = new URL(`https://mybusiness.googleapis.com/v4/${locationName}/reviews`);
    url.searchParams.set("pageSize", "50");
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const data = await apiGet(url.toString(), token);
    if (reviews.length === 0) {
      rating = data.averageRating ?? rating;
      totalRatings = data.totalReviewCount ?? 0;
    }

    for (const r of data.reviews ?? []) {
      const author = r.reviewer?.displayName?.trim();
      const text = r.comment?.trim();
      if (!author || !text) continue;
      reviews.push({
        id: r.reviewId ?? `gbp-${r.createTime}-${author}`,
        author,
        authorPhotoUrl: r.reviewer?.profilePhotoUrl,
        rating: starToNum(r.starRating),
        text,
        relativeTime: "",
        publishedAt: r.createTime?.slice(0, 10),
      });
    }
    pageToken = data.nextPageToken;
  } while (pageToken);

  return {
    syncedAt: new Date().toISOString(),
    source: "business_profile",
    rating,
    totalRatings: totalRatings || reviews.length,
    reviews,
  };
}

const env = loadEnv();
const token = await getAccessToken(env);
const locationName = await resolveLocation(env, token);
console.log("Location:", locationName);

const cache = await fetchAllReviews(locationName, token);
console.log(`Synced ${cache.reviews.length} reviews (avg ${cache.rating})`);

const outDir = path.join(process.cwd(), "data");
mkdirSync(outDir, { recursive: true });
writeFileSync(
  path.join(outDir, "google-reviews-cache.json"),
  JSON.stringify(cache, null, 2),
);
console.log("Written data/google-reviews-cache.json");
