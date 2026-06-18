import { ImageResponse } from "next/og";
import { isValidLocale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COPY = {
  de: {
    alt: "Wien Handwerk Profis – Altbau-Fenster Sanierung und Handwerker Wien",
    brand: "Wien Handwerk Profis",
    name: "Gergely Dancs",
    tagline: "Altbau-Fenster · Nutenfräsen · Handwerker Wien",
    bullets: ["Fixpreise", "Saubere Arbeit", "Ganz Wien"],
  },
  en: {
    alt: "Wien Handwerk Profis – period window restoration and handyman Vienna",
    brand: "Wien Handwerk Profis",
    name: "Gergely Dancs",
    tagline: "Period windows · Routed sealing · Handyman Vienna",
    bullets: ["Fixed prices", "Clean work", "All Vienna"],
  },
} as const;

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "de";

  return [
    {
      id: locale,
      alt: COPY[locale].alt,
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : "de";
  const copy = COPY[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#34d399",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {copy.brand}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {copy.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#cbd5e1",
              maxWidth: 800,
            }}
          >
            {copy.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          {copy.bullets.map((item, index) => (
            <span key={item} style={{ display: "flex", gap: "24px" }}>
              {index > 0 ? <span>·</span> : null}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
