import { BUSINESS_NAME, SITE_HOST, SITE_URL } from "./site";

export const GOOGLE_BUSINESS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ?? "";

export const GOOGLE_PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";

export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : "";

const mapsSearchQuery = encodeURIComponent(BUSINESS_NAME);

export const GOOGLE_MAPS_PLACE_URL = GOOGLE_PLACE_ID
  ? `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}&query_place_id=${encodeURIComponent(GOOGLE_PLACE_ID)}`
  : "";

/** Prefer the owner share link; fallback to cross-platform Maps place URL. */
export const GOOGLE_VIEW_REVIEWS_URL =
  GOOGLE_BUSINESS_URL || GOOGLE_MAPS_PLACE_URL;

export const PHONE_DISPLAY = "06608956377";
export const PHONE_HREF = "tel:+436608956377";
export const WHATSAPP_HREF = "https://wa.me/436608956377";

export function buildWhatsAppHref(prefillMessage?: string): string {
  if (!prefillMessage?.trim()) return WHATSAPP_HREF;
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(prefillMessage.trim())}`;
}
export const EMAIL = `info@${SITE_HOST}`;
export const MAILTO_HREF = `mailto:${EMAIL}`;
export const WEBSITE_DISPLAY = SITE_HOST;
export const WEBSITE_URL = SITE_URL;
export const ODR_URL = "https://ec.europa.eu/odr";
export const RIS_URL = "https://www.ris.bka.gv.at";
export const RIS_DISPLAY = "www.ris.bka.gv.at";

export const IMPRESSUM = {
  name: "Gergely Dancs",
} as const;

export function buildMailtoHref(): string {
  return MAILTO_HREF;
}
