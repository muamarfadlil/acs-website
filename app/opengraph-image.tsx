import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "PT Adiguna Cakra Semesta — Drilling-Completion Fluids & Cementing Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a1f44 0%, #091532 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ width: 8, height: 40, background: "#c41e1e" }} />
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c41e1e",
              fontWeight: 700,
            }}
          >
            Est. 2004 · ISO Certified
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
          PT Adiguna Cakra Semesta
        </div>

        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#c41e1e", marginTop: 12 }}>
          Trusted Partner Drilling Fluids &amp; Cementing
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            marginTop: 28,
            maxWidth: 850,
          }}
        >
          Drilling-Completion Fluids · Cementing · Mud Logging — untuk industri
          hulu migas &amp; geotermal Indonesia
        </div>
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
