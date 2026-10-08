import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedShinyTextProps = {
  children: ReactNode;
  className?: string;
  /** Affiche le badge pill (bordure + fond) */
  pill?: boolean;
};

/** Texte avec balayage brillant — style Magic UI Animated Shiny Text */
export function AnimatedShinyText({
  children,
  className,
  pill = true,
}: AnimatedShinyTextProps) {
  const shiny = (
    <span
      className={cn(
        "animate-shiny-text bg-[linear-gradient(110deg,#ffffff70,40%,#ffffff,60%,#ffffff70)] bg-[length:250%_100%] bg-clip-text font-medium text-transparent [-webkit-background-clip:text]",
        !pill && className
      )}
    >
      {children}
    </span>
  );

  if (!pill) return shiny;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm",
        className
      )}
    >
      {shiny}
    </span>
  );
}
