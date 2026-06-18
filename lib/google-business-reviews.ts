import "server-only";

import { getGoogleAccessToken, hasBusinessProfileCredentials } from "./google-auth";
import type { Locale } from "./i18n";
import type { PlaceReview, PlaceReviewsResult } from "./google-places";

const LOCATION_NAME = process.env.GOOGLE_BUSINESS_LOCATION_NAME ?? "";
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";
const REVALIDATE_SECONDS = 60 * 60;

type BusinessProfileReview = {
  reviewId?: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
  };
  starRating?: string;
  comment?: string;
  createTime?: string;
};

type ListReviewsResponse = {
  reviews?: BusinessProfileReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

type Account = { name?: string };
type AccountsResponse = { accounts?: Account[] };

type Location = {
  name?: string;
  title?: string;
  metadata?: { placeId?: string };
};
type LocationsResponse = { locations?: Location[] };

function starRatingToNumber(star?: string): number {
  const map: Record<string, number> = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  };
  return star ? (map[star] ?? 5) : 5;
}

function formatRelativeTime(iso: string, lang: Locale): string {
  const date = new Date(iso);
  const now = Date.now();
  const diffDays = Math.floor((now - date.getTime()) / (1000 * 60 * 60 * 24));

  if (lang === "de") {
    if (diffDays < 1) return "heute";
    if (diffDays === 1) return "vor 1 Tag";
    if (diffDays < 30) return `vor ${diffDays} Tagen`;
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "vor 1 Monat" : `vor ${months} Monaten`;
  }

  if (diffDays < 1) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 30) return `${diffDays} days ago`;
  const months = Math.floor(diffDays / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

function normalizeBusinessReview(
  review: BusinessProfileReview,
  lang: Locale,
): PlaceReview | null {
  const author = review.reviewer?.displayName?.trim();
  const text = review.comment?.trim();

  if (!author || !text) return null;

  return {
    id: review.reviewId ?? `gbp-${review.createTime}-${author}`,
    author,
    authorPhotoUrl: review.reviewer?.profilePhotoUrl,
    rating: starRatingToNumber(review.starRating),
    text,
    relativeTime: review.createTime
      ? formatRelativeTime(review.createTime, lang)
      : "",
    publishedAt: review.createTime?.slice(0, 10),
  };
}

async function fetchWithAuth<T>(
  url: string,
  token: string,
  init?: RequestInit,
): Promise<T | null> {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init?.headers ?? {}),
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    if (process.env.NODE_ENV === "development") {
      const error = await response.text();
      console.warn(`[google-business] ${url} failed:`, error);
    }
    return null;
  }

  return (await response.json()) as T;
}

async function resolveLocationName(token: string): Promise<string | null> {
  if (LOCATION_NAME) return LOCATION_NAME;
  if (!PLACE_ID) return null;

  const accounts = await fetchWithAuth<AccountsResponse>(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    token,
  );

  for (const account of accounts?.accounts ?? []) {
    if (!account.name) continue;

    const locations = await fetchWithAuth<LocationsResponse>(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,metadata`,
      token,
    );

    for (const location of locations?.locations ?? []) {
      if (location.metadata?.placeId === PLACE_ID && location.name) {
        if (process.env.NODE_ENV === "development") {
          console.info(
            `[google-business] Resolved location: ${location.name} (${location.title})`,
          );
        }
        return location.name;
      }
    }
  }

  return null;
}

async function fetchAllReviewsForLocation(
  locationName: string,
  token: string,
  lang: Locale,
): Promise<{ reviews: PlaceReview[]; rating: number; totalRatings: number }> {
  const reviews: PlaceReview[] = [];
  let pageToken: string | undefined;
  let rating = 5;
  let totalRatings = 0;

  do {
    const url = new URL(
      `https://mybusiness.googleapis.com/v4/${locationName}/reviews`,
    );
    url.searchParams.set("pageSize", "50");
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const data = await fetchWithAuth<ListReviewsResponse>(url.toString(), token);
    if (!data) break;

    if (reviews.length === 0) {
      rating = data.averageRating ?? rating;
      totalRatings = data.totalReviewCount ?? 0;
    }

    for (const review of data.reviews ?? []) {
      const normalized = normalizeBusinessReview(review, lang);
      if (normalized) reviews.push(normalized);
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  if (totalRatings === 0) totalRatings = reviews.length;
  if (!rating && reviews.length > 0) {
    rating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  }

  return { reviews, rating, totalRatings };
}

export async function fetchBusinessProfileReviews(
  lang: Locale,
): Promise<PlaceReviewsResult | null> {
  if (!hasBusinessProfileCredentials()) return null;

  const token = await getGoogleAccessToken();
  if (!token) return null;

  const locationName = await resolveLocationName(token);
  if (!locationName) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[google-business] Location not found. Set GOOGLE_BUSINESS_LOCATION_NAME or check Place ID.",
      );
    }
    return null;
  }

  const { reviews, rating, totalRatings } = await fetchAllReviewsForLocation(
    locationName,
    token,
    lang,
  );
  if (reviews.length === 0) return null;

  return {
    rating,
    totalRatings,
    reviews,
    source: "business_profile",
    resolvedPlaceId: PLACE_ID || undefined,
  };
}
