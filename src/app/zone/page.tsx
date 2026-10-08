import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";
import { COMMUNES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zone d’intervention",
  description:
    "Onsenccupe intervient en Essonne et dans un rayon local en Île-de-France. Consultez les communes principales et demandez un devis.",
};

export default function ZonePage() {
  return (
    <>
      <PageHero
        eyebrow="Zone d’intervention"
        title="Proches de vous, en Essonne"
        description="Basés localement, on se déplace dans l’Essonne et un rayon proche en Île-de-France. Réactivité et connaissance du terrain."
      />

      <section className="section-padding bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              <MapPin className="h-4 w-4" aria-hidden />
              {SITE.zone}
            </div>
            <h2 className="mt-6 text-2xl font-bold text-brand sm:text-3xl">
              Communes principales
            </h2>
            <p className="mt-3 text-muted-foreground">
              Liste non exhaustive. Votre ville n’apparaît pas ? Écrivez-nous :
              on confirme en quelques heures si on peut intervenir.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {COMMUNES.map((commune) => (
                <li
                  key={commune}
                  className="flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-surface/60 px-3 py-2.5 text-sm text-brand"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {commune}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Vérifier ma commune / devis
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              Carte
            </h2>
            <p className="mt-3 text-muted-foreground">
              Vue centrée sur l’Essonne. Le rayon exact dépend du type de
              prestation et de la disponibilité.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-soft">
              <iframe
                title="Carte zone d’intervention Onsenccupe — Essonne"
                src="https://maps.google.com/maps?q=Essonne,%20France&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-[360px] w-full border-0 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Carte indicative. Pour un trajet précis, indiquez votre adresse
              dans le formulaire de devis.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="On passe près de chez vous ?"
        description="Laissez votre commune et votre besoin — on vous répond vite."
      />
    </>
  );
}
