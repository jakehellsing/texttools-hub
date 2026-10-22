import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TextTools Hub — free online text tools";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, display: "flex" }}>
          TextTools Hub
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#c7d2fe",
            display: "flex",
          }}
        >
          Free online text tools — word counter, case converter, slug
          generator and more.
        </div>
      </div>
    ),
    size,
  );
}
