import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-dark text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="container-site section-padding !py-12 sm:!py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-3 text-sm text-white/70">{SITE.slogan}</p>
            <p className="mt-3 text-xs text-white/45">{SITE.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{SITE.zone}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Horaires
            </p>
            <p className="mt-4 text-sm text-white/65">{SITE.hours}</p>
            <p className="mt-2 text-sm text-white/65">
              Devis gratuit — réponse rapide
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {year} {SITE.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
