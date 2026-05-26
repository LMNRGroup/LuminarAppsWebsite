import { ImageResponse } from "next/og";

import { BrandIconSvg } from "@/components/brand-icon-svg";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 18% 18%, rgba(247,184,75,0.14), transparent 34%), radial-gradient(circle at 82% 20%, rgba(151,118,181,0.16), transparent 30%), linear-gradient(180deg, #14171d 0%, #0e1116 52%, #0b0d11 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <BrandIconSvg size={124} />
      </div>
    ),
    size,
  );
}
