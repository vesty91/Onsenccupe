import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

/** Bouton WhatsApp flottant avec pulse */
export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite un devis Onsenccupe."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 lg:bottom-5 lg:right-5"
      aria-label="Nous contacter sur WhatsApp"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
      />
      <MessageCircle className="relative h-7 w-7" aria-hidden />
    </a>
  );
}
