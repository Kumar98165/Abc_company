type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  invert = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = invert ? "text-white" : "text-slate-950";
  const descriptionColor = invert ? "text-slate-300" : "text-slate-500";

  return (
    <div className={["flex max-w-3xl flex-col gap-4", alignment, className].join(" ")}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
        <span className="h-2 w-2 rounded-full bg-sky-500" />
        {label}
      </span>
      <h2 className={["text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.35rem]", titleColor].join(" ")}>
        {title}
      </h2>
      {description ? (
        <p className={["max-w-2xl text-base leading-8 sm:text-lg", descriptionColor].join(" ")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
