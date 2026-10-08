"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

/** CTA avec shimmer animé — style Magic UI Shimmer Button */
export function ShimmerButton({ children, href, className }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl px-8 font-semibold text-white",
        "bg-accent shadow-[0_0_24px_-4px_rgba(232,145,58,0.55)] transition hover:bg-accent-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full animate-shimmer-slide"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
