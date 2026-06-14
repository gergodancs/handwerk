export const GOOGLE_BUSINESS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ?? "";

export const GOOGLE_PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "";

export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : "";

export const GOOGLE_MAPS_PLACE_URL = GOOGLE_PLACE_ID
  ? `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
  : "";

export const PHONE_DISPLAY = "06608956377";
export const PHONE_HREF = "tel:+436608956377";
export const WHATSAPP_HREF = "https://wa.me/436608956377";
export const EMAIL = "info@wien-handwerk-profis.at";
export const WEBSITE_DISPLAY = "www.wien-handwerk-profis.at";
export const WEBSITE_URL = "https://www.wien-handwerk-profis.at";
export const ODR_URL = "http://ec.europa.eu/odr";
export const RIS_URL = "https://www.ris.bka.gv.at";
export const RIS_DISPLAY = "www.ris.bka.gv.at";

export const IMPRESSUM = {
  name: "Gergely Dancs",
  company: "Ihr Handwerker in Wien | Handwerk Profis",
  gisaNumber: "39350114",
} as const;

export function buildMailtoHref(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${EMAIL}?${params.toString()}`;
}
