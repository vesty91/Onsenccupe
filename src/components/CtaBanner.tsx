import { SITE } from "@/lib/constants";
import { Button } from "./Button";
import { BorderBeam } from "./magic/BorderBeam";
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
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-dark px-6 py-16 text-center shadow-elevate sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-brand-light/30 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShimmerButton href="/contact">Demander un devis</ShimmerButton>
              <Button
                href={SITE.phoneHref}
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:border-white hover:bg-white hover:text-brand"
              >
                Appeler maintenant
              </Button>
            </div>
          </div>
          <BorderBeam duration={8} colorFrom="#f07a2e" colorTo="#ffffff" />
        </div>
      </div>
    </section>
  );
}
