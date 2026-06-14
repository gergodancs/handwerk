import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 14,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        WHP
      </div>
    ),
    { ...size },
  );
}
