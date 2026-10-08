"use client";

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
};

/** Carte spotlight qui suit le curseur — style Magic UI Magic Card */
export function MagicCard({
  children,
  className,
  gradientSize = 220,
  gradientColor = "rgba(232, 145, 58, 0.18)",
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });

  const onMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const onLeave = useCallback(() => {
    setPos({ x: -999, y: -999 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at ${pos.x}px ${pos.y}px, ${gradientColor}, transparent 55%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
