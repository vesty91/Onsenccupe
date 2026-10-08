import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Fusion de classes Tailwind (shadcn + projet) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
