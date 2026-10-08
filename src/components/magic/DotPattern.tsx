import { cn } from "@/lib/utils";

type DotPatternProps = {
  className?: string;
};

/** Motif de points — style Magic UI Dot Pattern */
export function DotPattern({ className }: DotPatternProps) {
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/15",
        className
      )}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
