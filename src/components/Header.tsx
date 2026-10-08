"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ShimmerButton } from "./magic/ShimmerButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#e2e8f0]/80 bg-white/80 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted-foreground hover:bg-surface hover:text-brand"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-accent"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {SITE.phone}
          </a>
          <ShimmerButton href="/contact" className="!h-10 !px-5 !text-sm">
            Demander un devis
          </ShimmerButton>
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl p-2 text-brand hover:bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[#e2e8f0] bg-white/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            className="container-site flex flex-col gap-1 py-4"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-brand hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-muted-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {SITE.phone}
            </a>
            <div onClick={() => setOpen(false)} className="mt-2">
              <Button href="/contact" size="lg" className="w-full">
                Demander un devis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
