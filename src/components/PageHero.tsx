import { type ReactNode } from "react";
import { AnimatedShinyText } from "./magic/AnimatedShinyText";
import { DotPattern } from "./magic/DotPattern";
import { FilmGrain } from "./magic/FilmGrain";
import { Ripple } from "./magic/Ripple";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
      <DotPattern className="opacity-30" />
      <Ripple className="opacity-40" />
      <FilmGrain className="opacity-[0.08]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,145,58,0.22),transparent_40%)]"
      />

      <div className="container-site relative max-w-3xl">
        {eyebrow && (
          <AnimatedShinyText className="mb-4">{eyebrow}</AnimatedShinyText>
        )}
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
