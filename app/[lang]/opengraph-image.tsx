import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wien Handwerk Profis – Handwerker & Maler in Wien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            Wien Handwerk Profis
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Gergely Dancs
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#cbd5e1",
              maxWidth: 800,
            }}
          >
            Malerarbeiten · Altbau-Fenster · Handwerker Wien
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
          <span>Fixpreise</span>
          <span>·</span>
          <span>Saubere Arbeit</span>
          <span>·</span>
          <span>Ganz Wien</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
