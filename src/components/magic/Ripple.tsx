import { cn } from "@/lib/utils";

type RippleProps = {
  className?: string;
};

/** Ondes concentriques — style Magic UI Ripple */
export function Ripple({ className }: RippleProps) {
  const circles = [0, 1, 2, 3, 4];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {circles.map((i) => (
        <div
          key={i}
          className="absolute animate-ripple rounded-full border border-white/20"
          style={{
            width: `${180 + i * 120}px`,
            height: `${180 + i * 120}px`,
            animationDelay: `${i * 0.35}s`,
            opacity: 0.35 - i * 0.05,
          }}
        />
      ))}
    </div>
  );
}
