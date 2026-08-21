import "server-only";

import { readFile } from "fs/promises";
import path from "path";
import type { PlaceReviewsResult } from "./google-places";

type ReviewsCacheFile = {
  syncedAt: string;
  source?: PlaceReviewsResult["source"];
  rating: number;
  totalRatings: number;
  reviews: PlaceReviewsResult["reviews"];
};

const CACHE_PATH = path.join(process.cwd(), "data", "google-reviews-cache.json");
const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export async function loadCachedGoogleReviews(): Promise<PlaceReviewsResult | null> {
  try {
    const raw = await readFile(CACHE_PATH, "utf8");
    const data = JSON.parse(raw) as ReviewsCacheFile;

    if (!data.reviews?.length) return null;

    const syncedAt = Date.parse(data.syncedAt);
    if (!Number.isNaN(syncedAt) && Date.now() - syncedAt > CACHE_MAX_AGE_MS) {
      return null;
    }

    return {
      rating: data.rating,
      totalRatings: data.totalRatings,
      reviews: data.reviews,
      source: data.source ?? "business_profile",
    };
  } catch {
    return null;
  }
}
