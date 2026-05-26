import { ImageResponse } from "next/og";

import { BrandIconSvg } from "@/components/brand-icon-svg";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at 12% 16%, rgba(247,184,75,0.16), transparent 24%), radial-gradient(circle at 78% 18%, rgba(151,118,181,0.18), transparent 26%), linear-gradient(180deg, #14171d 0%, #0e1116 45%, #0b0d11 100%)",
          color: "#f5f7fb",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: 28,
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: 110,
              justifyContent: "center",
              width: 110,
            }}
          >
            <BrandIconSvg size={110} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                color: "rgba(245,247,251,0.98)",
                display: "flex",
                fontSize: 46,
                fontWeight: 650,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Luminar Apps
            </div>
            <div
              style={{
                color: "rgba(245,247,251,0.54)",
                display: "flex",
                fontSize: 18,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              Interactive Apps • Event Technology • Automation Systems
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 650,
              letterSpacing: "-0.07em",
              lineHeight: 0.96,
            }}
          >
            Digital systems for modern experiences.
          </div>
          <div
            style={{
              color: "rgba(245,247,251,0.66)",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.45,
              maxWidth: 980,
            }}
          >
            Luminar Apps builds interactive software, automation tools, and smart
            visual systems for brands, businesses, and public spaces.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            color: "rgba(245,247,251,0.48)",
            display: "flex",
            fontSize: 20,
            justifyContent: "space-between",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>luminarapps.com</div>
          <div style={{ display: "flex" }}>apps@lmnrgroup.com</div>
        </div>
      </div>
    ),
    size,
  );
}
