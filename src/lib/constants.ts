/** Coordonnées et infos de contact — à adapter avec les vraies données */
export const SITE = {
  name: "Onsenccupe",
  slogan: "Vous n'avez pas envie de le faire ? On s'en occupe.",
  tagline: "Débarras • Nettoyage • Extérieur • Coups de main",
  phone: "06 00 00 00 00",
  phoneHref: "tel:+33600000000",
  email: "contact@onsenccupe.fr",
  whatsapp: "33600000000",
  hours: "Lun – Sam : 8h – 19h",
  zone: "Essonne & Île-de-France (rayon local)",
  url: "https://onsenccupe.fr",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/zone", label: "Zone" },
  { href: "/contact", label: "Devis" },
] as const;
