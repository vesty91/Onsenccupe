import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Logo } from "@/components/Logo";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedShinyText } from "@/components/magic/AnimatedShinyText";
import { BeforeAfterSlider } from "@/components/magic/BeforeAfterSlider";
import { BlurFade } from "@/components/magic/BlurFade";
import { BorderBeam } from "@/components/magic/BorderBeam";
import { FilmGrain } from "@/components/magic/FilmGrain";
import { MagicCard } from "@/components/magic/MagicCard";
import { Marquee } from "@/components/magic/Marquee";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { SITE } from "@/lib/constants";
import {
  BEFORE_AFTER,
  COMMUNES,
  REVIEWS,
  SERVICE_POLES,
  WHY_US,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const STATS = [
  { value: 48, suffix: "h", label: "Réponse sous 48h" },
  { value: 4, suffix: "", label: "Pôles d’expertise" },
  { value: 100, suffix: "%", label: "Devis personnalisés" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero cinéma ── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-45 animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(240,122,46,0.28),transparent_42%),radial-gradient(ellipse_at_80%_80%,rgba(12,26,43,0.5),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark" />
          <FilmGrain className="opacity-[0.06]" />
        </div>

        <div className="container-site relative flex min-h-[100svh] flex-col justify-center pb-28 pt-24">
          <BlurFade>
            <Logo variant="light" className="mb-8 scale-110 origin-left" />
          </BlurFade>

          <BlurFade delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              <AnimatedShinyText pill={false}>
                Essonne & Île-de-France · Devis sous 48h
              </AnimatedShinyText>
            </span>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="mt-8 max-w-4xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Vous n’avez pas envie
              <br />
              de le faire ?
              <br />
              <span className="bg-gradient-to-r from-accent via-[#f5a05a] to-accent bg-clip-text text-transparent animate-aurora bg-300%">
                On s’en occupe.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.22}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
              Débarras · Nettoyage · Extérieur · Coups de main.
              <br />
              Vous décrivez. On intervient. Devis gratuit.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ShimmerButton href="/contact">
                Demander un devis
                <ArrowRight className="h-5 w-5" aria-hidden />
              </ShimmerButton>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/5 text-white backdrop-blur hover:border-white hover:bg-white hover:text-brand"
              >
                Voir les services
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.38}>
            <div className="mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-9">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs text-white/50 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section className="section-padding bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <BlurFade>
            <SectionHeading
              align="left"
              eyebrow="Le résultat"
              title="Du chaos… à l’espace libre."
              description="Glissez pour comparer. Visuels illustratifs — dès les premières interventions, on les remplacera par vos vrais chantiers."
            />
            <ul className="mt-9 space-y-3.5">
              {[
                "Débarras + tri + évacuation",
                "Remise en état légère possible",
                "Un seul interlocuteur, un devis clair",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-brand"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3 w-3 text-accent" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ShimmerButton href="/contact">Je veux ce résultat</ShimmerButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <div className="overflow-hidden rounded-3xl shadow-elevate ring-1 ring-black/5">
              <BeforeAfterSlider
                beforeSrc={BEFORE_AFTER.before}
                afterSrc={BEFORE_AFTER.after}
                beforeAlt={BEFORE_AFTER.beforeAlt}
                afterAlt={BEFORE_AFTER.afterAlt}
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Exemple illustratif — images stock
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── Bento services ── */}
      <section className="section-padding relative overflow-hidden bg-surface">
        <div className="container-site">
          <BlurFade>
            <SectionHeading
              eyebrow="Nos services"
              title="Quatre pôles. Une seule promesse."
              description="Cliquez, décrivez, on s’occupe du reste."
            />
          </BlurFade>

          <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:grid-rows-2">
            {SERVICE_POLES.map((service, i) => {
              const Icon = service.icon;
              const featured = i === 0;
              return (
                <BlurFade
                  key={service.id}
                  delay={i * 0.08}
                  className={cn(
                    "h-full",
                    featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
                  )}
                >
                  <Link
                    href={service.href}
                    className="group relative block h-full min-h-[220px] overflow-hidden rounded-3xl"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                        sizes={featured ? "50vw" : "25vw"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-transparent" />
                    </div>
                    <div className="relative z-[2] flex h-full flex-col justify-end p-5 pb-6 sm:p-6 sm:pb-7">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3
                        className={cn(
                          "font-display font-bold text-white",
                          featured ? "text-3xl" : "text-xl"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 text-white/70",
                          featured
                            ? "max-w-sm text-base"
                            : "line-clamp-2 text-sm"
                        )}
                      >
                        {service.short}
                      </p>
                      <span className="mt-3.5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Découvrir
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                    {featured && (
                      <BorderBeam
                        duration={10}
                        colorFrom="#f07a2e"
                        colorTo="#ffffff"
                      />
                    )}
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Concept ── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <BlurFade>
            <SectionHeading
              eyebrow="Le concept"
              title="Moins de charge mentale. Plus de tranquillité."
              description="Pas le temps, pas l’envie, pas le dos ? On intervient pour ce que vous repoussez — devis clair, zéro blabla."
            />
          </BlurFade>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <BlurFade key={item.title} delay={i * 0.08}>
                  <MagicCard className="h-full p-6 shadow-soft">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-brand/10 text-accent shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Zone ── */}
      <section className="section-padding relative overflow-hidden bg-brand-dark text-white">
        <FilmGrain className="opacity-[0.06]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-brand-light/30 blur-3xl"
        />

        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <BlurFade>
            <SectionHeading
              align="left"
              light
              eyebrow="Zone d’intervention"
              title="Essonne et alentours"
              description="Rayon local en Île-de-France. Votre commune n’est pas listée ? Demandez — on vous dit vite si on peut venir."
            />
            <ul className="mt-9 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {COMMUNES.slice(0, 9).map((commune) => (
                <li
                  key={commune}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 backdrop-blur"
                >
                  <Check
                    className="h-3.5 w-3.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  {commune}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ShimmerButton href="/zone">Voir toute la zone</ShimmerButton>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevate ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80"
                alt="Quartier résidentiel en Île-de-France"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/50 to-transparent" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Preuve sociale honnête ── */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container-site mb-12">
          <BlurFade>
            <SectionHeading
              eyebrow="Ce que les gens veulent"
              title="Tranquillité. Clarté. Résultat."
              description="Exemples de retours typiques — on publiera les vrais avis dès les premières interventions."
            />
          </BlurFade>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:45s]">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <figure
                key={`${review.name}-${i}`}
                className="w-[340px] rounded-2xl border border-[#ebe6e0] bg-surface/90 p-6 shadow-soft"
              >
                <div className="flex gap-0.5 text-accent" aria-label="5 étoiles">
                  {"★★★★★"}
                </div>
                <blockquote className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                  « {review.text} »
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {review.name.replace("Exemple — ", "").charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-brand">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.city}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
        </div>
      </section>

      <CtaBanner
        title={`${SITE.name} — on s’en occupe.`}
        description="Premiers clients : devis prioritaire. Décrivez votre besoin en 2 minutes."
      />
    </>
  );
}
