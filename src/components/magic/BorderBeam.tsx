import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BorderBeamProps = {
  className?: string;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
};

/**
 * Anneau lumineux animé — n’occulte pas le contenu (mask sur la bordure seule).
 */
export function BorderBeam({
  className,
  duration = 8,
  delay = 0,
  colorFrom = "#e8913a",
  colorTo = "#1e3a5f",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] rounded-[inherit]",
        className
      )}
      style={
        {
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          overflow: "hidden",
        } as CSSProperties
      }
    >
      <div
        className="absolute left-1/2 top-1/2 h-[200%] w-[200%] animate-border-spin"
        style={
          {
            "--beam-duration": `${duration}s`,
            "--beam-delay": `${delay}s`,
            background: `conic-gradient(from 0deg, transparent 0 68%, ${colorFrom} 78%, ${colorTo} 86%, transparent 94% 100%)`,
            transform: "translate(-50%, -50%)",
          } as CSSProperties
        }
      />
    </div>
  );
}
