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

export async function loadCachedGoogleReviews(): Promise<PlaceReviewsResult | null> {
  try {
    const raw = await readFile(CACHE_PATH, "utf8");
    const data = JSON.parse(raw) as ReviewsCacheFile;

    if (!data.reviews?.length) return null;

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
