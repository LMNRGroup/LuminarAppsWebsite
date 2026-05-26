interface FocusCardProps {
  index: string;
  title: string;
  description: string;
}

export function FocusCard({ index, title, description }: FocusCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-white/[0.022] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.038] sm:p-8">
      <p className="mono-copy text-xs uppercase tracking-[0.32em] text-white/40">
        {index}
      </p>
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-white/62">{description}</p>
    </article>
  );
}
