import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#ff462e",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 148,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-6px",
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span>Franca</span>
          <span style={{ color: "#3626A7" }}>.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            marginTop: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Agenzia di Marketing
        </div>
      </div>
    ),
    { ...size }
  )
}
