import type { Locale } from "./i18n";
import type { PlaceReviewsResult } from "./google-places";

const FALLBACK_DE: PlaceReviewsResult = {
  rating: 5,
  totalRatings: 5,
  source: "fallback",
  reviews: [
    {
      id: "fallback-de-1",
      author: "Sabine M.",
      rating: 5,
      text: "Hervorragende Arbeit! Gergely hat unsere Altbau-Fenster perfekt renoviert – sauber, pünktlich und zu einem fairen Fixpreis.",
      relativeTime: "vor 2 Monaten",
    },
    {
      id: "fallback-de-2",
      author: "Thomas R.",
      rating: 5,
      text: "Wände wurden professionell gespachtelt und gestrichen. Baustelle immer sauber hinterlassen. Sehr empfehlenswert!",
      relativeTime: "vor 4 Monaten",
    },
    {
      id: "fallback-de-3",
      author: "Elena W.",
      rating: 5,
      text: "Schnelle Hilfe bei Lampenmontage und kleineren Reparaturen. Freundlich, zuverlässig und unkompliziert per WhatsApp erreichbar.",
      relativeTime: "vor 6 Monaten",
    },
  ],
};

const FALLBACK_EN: PlaceReviewsResult = {
  rating: 5,
  totalRatings: 5,
  source: "fallback",
  reviews: [
    {
      id: "fallback-en-1",
      author: "Sabine M.",
      rating: 5,
      text: "Excellent work! Gergely restored our Altbau windows perfectly – clean, on time, and at a fair fixed price.",
      relativeTime: "2 months ago",
    },
    {
      id: "fallback-en-2",
      author: "Thomas R.",
      rating: 5,
      text: "Walls were professionally plastered and painted. Job site always left spotless. Highly recommended!",
      relativeTime: "4 months ago",
    },
    {
      id: "fallback-en-3",
      author: "Elena W.",
      rating: 5,
      text: "Quick help with lamp installation and minor repairs. Friendly, reliable, and easy to reach via WhatsApp.",
      relativeTime: "6 months ago",
    },
  ],
};

export function getFallbackPlaceReviews(lang: Locale): PlaceReviewsResult {
  return lang === "de" ? FALLBACK_DE : FALLBACK_EN;
}
