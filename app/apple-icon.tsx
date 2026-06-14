import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#34d399",
          fontSize: 48,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.05em",
          borderRadius: 32,
        }}
      >
        WHP
      </div>
    ),
    { ...size },
  );
}
