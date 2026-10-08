"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
};

/** Comparateur avant / après glissable */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Avant",
  afterAlt = "Après",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(55);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, ratio)));
  }, []);

  const onPointerDown = (e: ReactPointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(8, p - 3));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(92, p + 3));
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-elevate touch-none",
        className
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-valuemin={8}
      aria-valuemax={92}
      aria-valuenow={Math.round(position)}
      aria-label="Comparer avant et après"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand text-white shadow-lg">
          <span className="text-xs font-bold tracking-tight" aria-hidden>
            ↔
          </span>
        </div>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-brand-dark/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        Avant
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        Après
      </span>
    </div>
  );
}
