type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`${
        isCenter ? "mx-auto max-w-2xl text-center lg:max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-green sm:mb-4 sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="title-h2">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg md:mt-5 lg:text-xl ${
            isDark ? "text-white/70" : "text-black/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
