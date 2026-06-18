import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

const env = readFileSync(".env.local", "utf8");
const get = (key) => {
  const m = env.match(new RegExp(`^${key}=(.+)$`, "m"));
  return m?.[1]?.replace(/^["']|["']$/g, "").trim() ?? "";
};

const placeId = get("NEXT_PUBLIC_GOOGLE_PLACE_ID");
const key = get("NEXT_PUBLIC_GOOGLE_PLACES_API_KEY");

const res = await fetch(
  `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`,
  {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "rating,userRatingCount,reviews",
    },
  },
);
const data = await res.json();

const reviews = (data.reviews ?? [])
  .map((r, i) => {
    const author = r.authorAttribution?.displayName?.trim();
    const text = r.text?.text?.trim() || r.originalText?.text?.trim();
    if (!author || !text) return null;
    return {
      id: `google-${r.publishTime ?? i}-${author}`,
      author,
      authorPhotoUrl: r.authorAttribution?.photoUri,
      rating: r.rating ?? 5,
      text,
      relativeTime: r.relativePublishTimeDescription ?? "",
      publishedAt: r.publishTime?.slice(0, 10),
    };
  })
  .filter(Boolean);

const cache = {
  syncedAt: new Date().toISOString(),
  source: "places",
  rating: data.rating ?? 5,
  totalRatings: data.userRatingCount ?? reviews.length,
  reviews,
};

mkdirSync("data", { recursive: true });
writeFileSync("data/google-reviews-cache.json", JSON.stringify(cache, null, 2));
console.log(`Cached ${reviews.length} of ${cache.totalRatings} reviews`);
