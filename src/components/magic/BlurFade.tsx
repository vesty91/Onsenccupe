"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
};

/** Apparition au scroll — style Magic UI Blur Fade */
export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 12,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(8px)",
        transform: visible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
