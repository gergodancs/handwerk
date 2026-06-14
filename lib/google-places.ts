import "server-only";

import { cache } from "react";
import type { Locale } from "./i18n";
import { getFallbackPlaceReviews } from "./google-reviews-fallback";

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";
const API_KEY =
  process.env.GOOGLE_PLACES_API_KEY ??
  process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ??
  "";

const REVALIDATE_SECONDS = 60 * 60 * 6;

export type PlaceReview = {
  id: string;
  author: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishedAt?: string;
};

export type PlaceReviewsResult = {
  rating: number;
  totalRatings: number;
  reviews: PlaceReview[];
  source: "api" | "fallback";
};

type GooglePlaceReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  time?: number;
};

type GooglePlaceDetailsResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
  };
};

function toApiLanguage(lang: Locale): string {
  return lang === "de" ? "de" : "en";
}

function formatPublishedAt(timestamp?: number): string | undefined {
  if (!timestamp) return undefined;
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

function normalizeReview(review: GooglePlaceReview, index: number): PlaceReview | null {
  const author = review.author_name?.trim();
  const text = review.text?.trim();

  if (!author || !text) return null;

  return {
    id: `google-${review.time ?? index}-${author}`,
    author,
    authorPhotoUrl: review.profile_photo_url,
    rating: review.rating ?? 5,
    text,
    relativeTime: review.relative_time_description ?? "",
    publishedAt: formatPublishedAt(review.time),
  };
}

async function fetchPlaceReviewsFromApi(
  lang: Locale,
): Promise<PlaceReviewsResult | null> {
  if (!PLACE_ID || !API_KEY) return null;

  const params = new URLSearchParams({
    place_id: PLACE_ID,
    fields: "reviews,rating,user_ratings_total",
    key: API_KEY,
    language: toApiLanguage(lang),
  });

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
    { next: { revalidate: REVALIDATE_SECONDS } },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as GooglePlaceDetailsResponse;

  if (data.status !== "OK" || !data.result) return null;

  const reviews = (data.result.reviews ?? [])
    .map(normalizeReview)
    .filter((review): review is PlaceReview => review !== null);

  if (reviews.length === 0) return null;

  return {
    rating: data.result.rating ?? 5,
    totalRatings: data.result.user_ratings_total ?? reviews.length,
    reviews,
    source: "api",
  };
}

export const getPlaceReviews = cache(
  async (lang: Locale): Promise<PlaceReviewsResult> => {
    try {
      const apiResult = await fetchPlaceReviewsFromApi(lang);
      if (apiResult) return apiResult;
    } catch {
      // fall through to static fallback
    }

    return getFallbackPlaceReviews(lang);
  },
);

export function formatReviewCount(total: number, lang: Locale): string {
  if (lang === "de") {
    return total === 1 ? "1 Bewertung" : `${total} Bewertungen`;
  }

  return total === 1 ? "1 review" : `${total} reviews`;
}

export function formatRatingValue(rating: number): string {
  return rating.toFixed(1);
}
