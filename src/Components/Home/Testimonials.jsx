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
      className="overflow-hidden bg-white py-12 lg:py-[5.2vw]"
    >
      <div className="mx-auto px-5 sm:px-8 lg:px-[120px]">
        <h2
          id="testimonials-title"
          className="font-serif text-[28px] tracking-tight lg:text-[clamp(28px,2.7vw,40px)]"
        >
          Made for real life
        </h2>

        <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 lg:mt-[1.6vw] lg:gap-[1.8%]">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="w-[88%] shrink-0 snap-start sm:w-[65%] md:w-auto md:shrink md:aspect-[170/132]"
            >
              <figure className="dashed-border flex h-full flex-col px-6 py-6 lg:px-[10%] lg:py-[8%]">
                <div
                  className="flex gap-0.5"
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

                <blockquote className="mt-4 whitespace-pre-line text-[17px] leading-[1.55] text-ink md:mt-[5%] lg:text-[clamp(15px,1.6vw,23px)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-5 text-[12px] font-medium uppercase tracking-[0.06em] text-ink lg:mt-5">
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
