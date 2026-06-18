import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import { cache } from "react";
import { PHONE_DISPLAY } from "./constants";
import type { Locale } from "./i18n";
import { fetchBusinessProfileReviews } from "./google-business-reviews";
import { loadCachedGoogleReviews } from "./google-reviews-cache";
import { getFallbackPlaceReviews } from "./google-reviews-fallback";
import { BUSINESS_NAME, OWNER_NAME, SITE_NAME } from "./site";

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";
const API_KEY =
  process.env.GOOGLE_PLACES_API_KEY ??
  process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ??
  "";

const REVALIDATE_SECONDS = 60 * 60;
const MIN_SEARCH_SCORE = 85;

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
  source: "business_profile" | "places" | "fallback";
  resolvedPlaceId?: string;
};

type NewApiReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
};

type NewApiPlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  reviews?: NewApiReview[];
};

type SearchPlace = {
  id?: string;
  displayName?: { text?: string };
};

function toApiLanguage(lang: Locale): string {
  return lang === "de" ? "de" : "en";
}

function formatPublishedAt(iso?: string): string | undefined {
  if (!iso) return undefined;
  return iso.slice(0, 10);
}

function normalizeNewApiReview(
  review: NewApiReview,
  index: number,
): PlaceReview | null {
  const author = review.authorAttribution?.displayName?.trim();
  const text =
    review.text?.text?.trim() || review.originalText?.text?.trim();

  if (!author || !text) return null;

  return {
    id: `google-${review.publishTime ?? index}-${author}`,
    author,
    authorPhotoUrl: review.authorAttribution?.photoUri,
    rating: review.rating ?? 5,
    text,
    relativeTime: review.relativePublishTimeDescription ?? "",
    publishedAt: formatPublishedAt(review.publishTime),
  };
}

function mapNewApiResult(
  data: NewApiPlaceDetails,
  placeId: string,
): PlaceReviewsResult | null {
  const reviews = (data.reviews ?? [])
    .map(normalizeNewApiReview)
    .filter((review): review is PlaceReview => review !== null);

  if (reviews.length === 0) return null;

  return {
    rating: data.rating ?? 5,
    totalRatings: data.userRatingCount ?? reviews.length,
    reviews,
    source: "places",
    resolvedPlaceId: placeId,
  };
}

function scorePlaceName(name: string): number {
  const normalized = name.toLowerCase();

  if (normalized.includes("wien handwerk profis")) return 100;
  if (normalized.includes("handwerk profis")) return 90;
  if (normalized.includes("gergely dancs")) return 88;
  if (normalized.includes("wien handwerk")) return 75;

  return 0;
}

function getSearchQueries(): string[] {
  const custom =
    process.env.GOOGLE_PLACE_SEARCH_QUERY ??
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_SEARCH_QUERY;

  const defaults = [
    `${SITE_NAME} Wien`,
    `${OWNER_NAME} ${SITE_NAME} Wien`,
    BUSINESS_NAME,
    `${OWNER_NAME} Maler Wien`,
    PHONE_DISPLAY,
    `${SITE_NAME} Penzinger Straße Wien`,
  ];

  return [...new Set([custom, ...defaults].filter(Boolean))] as string[];
}

async function fetchNewPlaceDetails(
  placeId: string,
  lang: Locale,
): Promise<PlaceReviewsResult | null> {
  if (!API_KEY || !placeId) return null;

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=${toApiLanguage(lang)}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    if (process.env.NODE_ENV === "development") {
      const errorBody = (await response.json().catch(() => null)) as {
        error?: { message?: string };
      } | null;
      console.warn(
        `[google-places] Place Details failed for ${placeId}:`,
        errorBody?.error?.message ?? response.status,
      );
    }
    return null;
  }

  const data = (await response.json()) as NewApiPlaceDetails;
  return mapNewApiResult(data, placeId);
}

async function resolvePlaceIdBySearch(): Promise<string | null> {
  if (!API_KEY) return null;

  let best: { id: string; score: number } | null = null;

  for (const textQuery of getSearchQueries()) {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "places.id,places.displayName",
        },
        body: JSON.stringify({
          textQuery,
          languageCode: "de",
          regionCode: "AT",
        }),
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) continue;

    const data = (await response.json()) as { places?: SearchPlace[] };

    for (const place of data.places ?? []) {
      const id = place.id;
      const name = place.displayName?.text ?? "";
      if (!id) continue;

      const score = scorePlaceName(name);
      if (score >= MIN_SEARCH_SCORE && (!best || score > best.score)) {
        best = { id, score };
      }
    }

    if (best) break;
  }

  if (best && process.env.NODE_ENV === "development") {
    console.info(
      `[google-places] Resolved Place ID via search: ${best.id} (score ${best.score})`,
    );
  }

  return best?.id ?? null;
}

async function fetchPlaceReviewsFromApi(
  lang: Locale,
): Promise<PlaceReviewsResult | null> {
  if (!API_KEY) return null;

  if (PLACE_ID) {
    const configured = await fetchNewPlaceDetails(PLACE_ID, lang);
    if (configured) return configured;
  }

  const resolvedId = await resolvePlaceIdBySearch();
  if (resolvedId) {
    return fetchNewPlaceDetails(resolvedId, lang);
  }

  return null;
}

export const getPlaceReviews = cache(
  async (lang: Locale): Promise<PlaceReviewsResult> => {
    if (process.env.NODE_ENV === "development") {
      noStore();
    }

    try {
      const businessReviews = await fetchBusinessProfileReviews(lang);
      if (businessReviews) return businessReviews;

      const cachedReviews = await loadCachedGoogleReviews();
      if (cachedReviews) return cachedReviews;

      const placesResult = await fetchPlaceReviewsFromApi(lang);
      if (placesResult) return placesResult;
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[google-places] API request failed:", error);
      }
    }

    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[google-places] Using fallback reviews. Check Place ID, enable Places API (New), and restart dev server.",
      );
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
