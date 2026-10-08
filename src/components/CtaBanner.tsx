import { SITE } from "@/lib/constants";
import { Button } from "./Button";
import { BorderBeam } from "./magic/BorderBeam";
import { DotPattern } from "./magic/DotPattern";
import { ShimmerButton } from "./magic/ShimmerButton";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Prêt à vous alléger l’esprit ?",
  description = "Décrivez votre besoin en 2 minutes. Devis gratuit, réponse rapide, sans engagement.",
}: CtaBannerProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-dark px-6 py-14 text-center shadow-elevate sm:px-12 sm:py-16">
          <DotPattern className="opacity-30" />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-brand-light/40 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShimmerButton href="/contact">Demander un devis</ShimmerButton>
              <Button
                href={SITE.phoneHref}
                variant="outline"
                size="lg"
                className="border-white/35 bg-white/5 text-white hover:border-white hover:bg-white hover:text-brand"
              >
                Appeler maintenant
              </Button>
            </div>
          </div>
          <BorderBeam duration={7} colorFrom="#e8913a" colorTo="#ffffff" />
        </div>
      </div>
    </section>
  );
}
