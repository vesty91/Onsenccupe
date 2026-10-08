import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePole } from "@/lib/data";

type ServiceCardProps = {
  service: ServicePole;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-soft transition hover:border-brand/20 hover:shadow-md"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/5 text-brand transition group-hover:bg-accent/10 group-hover:text-accent">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-4 text-xl font-bold text-brand">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        En savoir plus
        <ArrowRight
          className="h-4 w-4 transition group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
