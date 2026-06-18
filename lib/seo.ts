import type { Locale } from "./i18n";
import type { PlaceReviewsResult } from "./google-places";

export const VIENNA_GEO = {
  latitude: 48.1942,
  longitude: 16.3078,
} as const;

const VIENNA_DISTRICTS_DE = [
  "Wien Innere Stadt",
  "Wien Hietzing",
  "Wien Währing",
  "Wien Döbling",
  "Wien Penzing",
] as const;

const VIENNA_DISTRICTS_EN = [
  "Vienna Innere Stadt",
  "Vienna Hietzing",
  "Vienna Währing",
  "Vienna Döbling",
  "Vienna Penzing",
] as const;

export function isSchemaSafeReviews(
  reviews: PlaceReviewsResult | null,
): reviews is PlaceReviewsResult {
  return reviews !== null && reviews.source !== "fallback";
}

export function getAreaServedSchema(lang: Locale) {
  const cityName = lang === "de" ? "Wien" : "Vienna";
  const districts = lang === "de" ? VIENNA_DISTRICTS_DE : VIENNA_DISTRICTS_EN;

  return [
    { "@type": "City", name: cityName },
    ...districts.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  ];
}
