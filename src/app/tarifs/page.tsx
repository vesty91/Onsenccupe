import type { Metadata } from "next";
import { Calculator, FileCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { TARIFS_INDICATIFS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Grille tarifaire indicative Onsenccupe. Devis gratuit et personnalisé pour débarras, nettoyage, extérieur et coups de main en Essonne.",
};

const STEPS = [
  {
    icon: PhoneCall,
    title: "1. Vous décrivez",
    text: "Photos, volume approximatif, accès (escalier, parking…), commune.",
  },
  {
    icon: Calculator,
    title: "2. On estime",
    text: "Temps, nombre de personnes, évacuation éventuelle, options nettoyage.",
  },
  {
    icon: FileCheck,
    title: "3. Devis clair",
    text: "Un prix net, ce qui est inclus, et une date d’intervention proposée.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title="Des prix clairs, un devis gratuit"
        description="Les montants ci-dessous sont indicatifs. Chaque chantier est différent : accès, volume, urgence. On vous envoie un devis personnalisé sans engagement."
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">
            Grille indicative
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Ces fourchettes vous donnent une idée. Le devis final tient compte du
            terrain réel.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold sm:px-6">Prestation</th>
                  <th className="px-4 py-4 font-semibold sm:px-6">Indicatif</th>
                  <th className="hidden px-4 py-4 font-semibold sm:table-cell sm:px-6">
                    Précision
                  </th>
                </tr>
              </thead>
              <tbody>
                {TARIFS_INDICATIFS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="px-4 py-4 font-medium text-brand sm:px-6">
                      {row.label}
                      <p className="mt-1 text-xs font-normal text-muted-foreground sm:hidden">
                        {row.note}
                      </p>
                    </td>
                    <td className="px-4 py-4 font-semibold text-accent sm:px-6">
                      {row.value}
                    </td>
                    <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell sm:px-6">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <p className="font-semibold text-brand">
              Devis gratuit et personnalisé
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Pas de surprise : on vous dit ce qui est inclus (main-d’œuvre,
              tri, évacuation, nettoyage…) avant de commencer. Si le volume
              change sur place, on vous prévient avant de facturer plus.
            </p>
            <Button href="/contact" className="mt-5">
              Obtenir mon devis
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site">
          <h2 className="text-center text-2xl font-bold text-brand sm:text-3xl">
            Comment on construit un devis
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Exemple : cave + grenier à Massy, accès escalier, évacuation
            encombrants.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-bold text-brand">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <h3 className="font-bold text-brand">Exemple chiffré (indicatif)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4 border-b border-[#e2e8f0] py-2">
                <span>Équipe 2 personnes × 3 h</span>
                <span className="font-medium text-brand">270 €</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[#e2e8f0] py-2">
                <span>Évacuation déchetterie / encombrants</span>
                <span className="font-medium text-brand">90 €</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-[#e2e8f0] py-2">
                <span>Nettoyage léger après débarras</span>
                <span className="font-medium text-brand">60 €</span>
              </li>
              <li className="flex justify-between gap-4 py-3 text-base">
                <span className="font-semibold text-brand">Total estimé</span>
                <span className="font-bold text-accent">≈ 420 €</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Montants fictifs à titre d’illustration. Votre devis réel dépend
              du volume et des contraintes d’accès.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner title="Besoin d’une estimation précise ?" />
    </>
  );
}
