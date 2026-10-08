"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { NEED_OPTIONS, URGENCY_OPTIONS } from "@/lib/data";
import { Button } from "./Button";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulaire de devis.
 * Configurez NEXT_PUBLIC_FORMSPREE_ID dans .env.local
 * (ex: NEXT_PUBLIC_FORMSPREE_ID=xyzabcde)
 * Sans ID, le formulaire simule un envoi réussi en mode démo.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    try {
      if (!formspreeId) {
        // Mode démo : simule un délai d’envoi
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        form.reset();
        return;
      }

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error("Envoi impossible. Réessayez ou appelez-nous.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-[#e2e8f0] bg-white p-8 text-center shadow-soft"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-brand">Demande envoyée</h3>
        <p className="mt-2 text-muted-foreground">
          Merci ! On vous recontacte rapidement pour votre devis.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-brand outline-none transition placeholder:text-muted-foreground/60 focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-elevate sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand">
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand">
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 XX XX XX XX"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@email.fr"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="need" className="mb-1.5 block text-sm font-medium text-brand">
            Type de besoin *
          </label>
          <select id="need" name="need" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            {NEED_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="mb-1.5 block text-sm font-medium text-brand">
            Urgence *
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            className={fieldClass}
            defaultValue="flexible"
          >
            {URGENCY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="mb-1.5 block text-sm font-medium text-brand"
          >
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Ex. : cave à vider à Massy, environ 8 m², accès escalier…"
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden />
            Envoyer ma demande
          </>
        )}
      </Button>

      <p className="mt-3 text-xs text-muted-foreground">
        * Champs obligatoires. Vos données servent uniquement à vous recontacter.
      </p>
    </form>
  );
}
