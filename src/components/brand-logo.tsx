import Image from "next/image";
import brandLogo from "../../Luminar Apps Brand Logo.svg";

type BrandLogoVariant = "header" | "panel" | "footer";

interface BrandLogoProps {
  priority?: boolean;
  variant: BrandLogoVariant;
}

const variantClasses: Record<BrandLogoVariant, string> = {
  header: "h-[1.55rem] sm:h-[1.75rem] aspect-[14/3]",
  panel: "h-[1.95rem] sm:h-[2.2rem] aspect-[14/3]",
  footer: "h-[1.7rem] sm:h-[1.9rem] aspect-[14/3]",
};

export function BrandLogo({ priority = false, variant }: BrandLogoProps) {
  return (
    <span className={`relative block ${variantClasses[variant]}`}>
      <Image
        alt="Luminar Apps logo"
        className="object-contain object-left"
        fill
        priority={priority}
        sizes="(max-width: 640px) 120px, 180px"
        src={brandLogo}
        unoptimized
      />
    </span>
  );
}
