import { Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  city: string;
  text: string;
  rating: number;
};

export function ReviewCard({ name, city, text, rating }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-soft">
      <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent text-accent"
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        « {text} »
      </blockquote>
      <figcaption className="mt-5 border-t border-[#e2e8f0] pt-4">
        <p className="font-semibold text-brand">{name}</p>
        <p className="text-xs text-muted-foreground">{city}</p>
      </figcaption>
    </figure>
  );
}
