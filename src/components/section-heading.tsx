interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="mono-copy text-xs uppercase tracking-[0.32em] text-white/45">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
