import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { BorderBeam } from "@/components/magic/BorderBeam";
import { MagicCard } from "@/components/magic/MagicCard";
import { FORMULES, SERVICE_POLES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Débarras, nettoyage, extérieur et coups de main en Essonne. Formules Coup de main, Débarras ou Formule complète. Devis gratuit.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ce qu’on peut prendre en charge"
        description="Quatre pôles d’activité, des formules adaptées à votre besoin. Vous n’avez pas envie de le faire ? On s’en occupe."
      />

      <section className="section-padding bg-white">
        <div className="container-site space-y-20">
          {SERVICE_POLES.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/5 text-brand">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-brand sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-brand"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/contact">Demander un devis</Button>
                  </div>
                </div>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Formules */}
      <section id="formules" className="section-padding scroll-mt-24 bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Formules
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand sm:text-4xl">
              Choisissez le niveau d’accompagnement
            </h2>
            <p className="mt-4 text-muted-foreground">
              Des forfaits simples pour coller à votre besoin — le prix exact se
              confirme au devis.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {FORMULES.map((formule) => (
              <MagicCard
                key={formule.name}
                className={cn(
                  "relative flex h-full flex-col p-6 shadow-soft sm:p-8",
                  formule.highlighted && "ring-2 ring-accent/30"
                )}
              >
                {formule.highlighted && (
                  <>
                    <span className="mb-3 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Le plus demandé
                    </span>
                    <BorderBeam duration={8} colorFrom="#e8913a" colorTo="#1e3a5f" />
                  </>
                )}
                <h3 className="font-display text-xl font-bold text-brand">
                  {formule.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-accent">
                  {formule.price}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {formule.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {formule.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={formule.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  Obtenir un devis
                </Button>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Un doute sur le service qu’il vous faut ?" />
    </>
  );
}
