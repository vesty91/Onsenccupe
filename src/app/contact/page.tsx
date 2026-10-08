import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & devis",
  description:
    "Demandez votre devis gratuit Onsenccupe. Débarras, nettoyage, extérieur, coups de main en Essonne. Réponse rapide.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Demander un devis"
        description="Deux minutes pour décrire votre besoin. On vous rappelle ou on vous répond par email avec une estimation claire."
      />

      <section className="section-padding bg-surface">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-bold text-brand">Coordonnées</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Préférez le téléphone ? On est joignables aux horaires indiqués.
              </p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-3 text-brand hover:text-accent"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Téléphone
                      </span>
                      <span className="font-semibold">{SITE.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-3 text-brand hover:text-accent"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Email
                      </span>
                      <span className="font-semibold">{SITE.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Horaires
                    </span>
                    <span className="font-semibold text-brand">{SITE.hours}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Zone
                    </span>
                    <span className="font-semibold text-brand">{SITE.zone}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-brand p-6 text-white">
              <p className="font-semibold">{SITE.slogan}</p>
              <p className="mt-2 text-sm text-white/70">
                Devis gratuit · Sans engagement · Réponse rapide
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
