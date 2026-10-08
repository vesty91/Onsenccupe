import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { UnregisterServiceWorker } from "@/components/UnregisterServiceWorker";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Débarras, Nettoyage, Extérieur & Coups de main`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Vous n’avez pas envie de le faire ? On s’en occupe. Débarras, nettoyage, extérieur et coups de main en Essonne et Île-de-France. Devis gratuit.",
  keywords: [
    "débarras Essonne",
    "nettoyage proximité",
    "vide maison",
    "déchets verts",
    "coups de main Île-de-France",
    "Onsenccupe",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: `${SITE.name} – On s’en occupe`,
    description: SITE.slogan,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${syne.variable} font-sans antialiased`}
      >
        <UnregisterServiceWorker />
        <Header />
        <main id="contenu-principal" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCta />
      </body>
    </html>
  );
}
