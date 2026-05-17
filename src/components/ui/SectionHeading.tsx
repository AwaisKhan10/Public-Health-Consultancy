import { AnimateIn } from "./AnimateIn";

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  subtitle,
  title,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <AnimateIn className={`mb-10 ${alignClass}`}>
      <p
        className={`mb-2 text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? "text-phc-coral" : "text-phc-teal"
        }`}
      >
        {subtitle}
      </p>
      {title ? (
        <h2
          className={`font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      ) : null}
    </AnimateIn>
  );
}
