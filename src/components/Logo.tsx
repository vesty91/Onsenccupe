import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showMark?: boolean;
};

/** Wordmark Onsenccupe — logo de lancement */
export function Logo({
  className,
  variant = "dark",
  showMark = true,
}: LogoProps) {
  const textClass = variant === "light" ? "text-white" : "text-brand";
  const markBg = variant === "light" ? "bg-white/15" : "bg-brand";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showMark && (
        <span
          className={cn(
            "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            markBg
          )}
          aria-hidden
        >
          <svg viewBox="0 0 40 40" className="h-5 w-5" fill="none">
            <path
              d="M10 26c4-8 12-12 16-4"
              stroke="#e8913a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="18" cy="16" r="2.5" fill="#e8913a" />
          </svg>
        </span>
      )}
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight sm:text-xl",
          textClass
        )}
      >
        Onsenccupe
      </span>
    </span>
  );
}
