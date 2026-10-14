
import { Star } from "lucide-react";

const quote =
  "The shirt feels\n considered without\n feeling precious. I wear it\n to work and on\n weekends.";

export const testimonials = [
  { id: 1, quote, author: "Mariam, 34 · Size M", rating: 5 },
  { id: 2, quote, author: "Mariam, 34 · Size M", rating: 5 },
  { id: 3, quote, author: "Mariam, 34 · Size M", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-hidden bg-white py-10 sm:py-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-16 xl:px-[120px]">
        <h2
          id="testimonials-title"
          className="font-serif text-[28px] leading-tight tracking-tight sm:text-3xl lg:text-[clamp(28px,2.7vw,40px)]"
        >
          Made for real life
        </h2>

        <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 lg:mt-8 lg:gap-6">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="flex w-[88%] min-w-0 shrink-0 snap-start sm:w-[65%] md:w-auto"
            >
              <figure className="dashed-border flex min-h-[260px] w-full flex-1 flex-col p-5 sm:min-h-[280px] sm:p-6 lg:min-h-[320px] lg:p-7 xl:p-8">
                <div
                  className="flex shrink-0 gap-0.5"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      strokeWidth={0}
                      fill="#C6A15B"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 whitespace-pre-line break-words text-[16px] leading-relaxed text-ink sm:text-[17px] md:text-base lg:mt-6 lg:text-[clamp(16px,1.35vw,21px)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-auto pt-6 text-[11px] font-medium uppercase leading-relaxed tracking-[0.06em] text-ink sm:text-xs">
                  {t.author}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
