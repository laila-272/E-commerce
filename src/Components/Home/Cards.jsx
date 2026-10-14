import img1 from "../../assets/ecards/Image.png";
import img2 from "../../assets/ecards/Image-1.png";
import img3 from "../../assets/ecards/Image-2.png";

const cards = [
  {
    id: "her",
    label: "The soft structure",
    title: "For her, for every day.",
    cta: "Shop women",
    href: "#women",
    image: img1,
    alt: "Woman in a mustard-yellow coat in front of an ornate tapestry",
  },
  {
    id: "layer",
    label: "The everyday edit",
    title: "Ease, in every layer.",
    cta: "Shop men",
    href: "#men",
    image: img2,
    alt: "Man in a brown overshirt and matching trousers against a pale wall",
  },
  {
    id: "small",
    label: "Made to play",
    title: "Small clothes. Big days.",
    cta: "Shop kids",
    href: "#kids",
    image: img3,
    alt: "Smiling boy in a printed cotton tee and faded jeans",
  },
];

export default function EditorialCards() {
  return (
    <section
      id="edit"
      aria-label="Collections"
      className="bg-[#F8F4EF] py-10 sm:py-12 lg:py-20"
    >
      <ul className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3 md:gap-5 md:px-10 lg:gap-8 lg:px-16 xl:gap-10 xl:px-[120px]">
        {cards.map((c) => (
          <li key={c.id} className="min-w-0">
            <a href={c.href} className="group block">
              <div className="aspect-[4/4.4] overflow-hidden rounded-t-xl bg-line sm:aspect-[4/4.6] md:aspect-[4/4.8] lg:aspect-[146/155]">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-mist sm:text-[10px]">
                {c.label}
              </p>

              <h3 className="mt-1.5 font-fredericka text-xl leading-tight sm:text-[21px] lg:text-[clamp(18px,1.6vw,26px)]">
                {c.title}
              </h3>

              <span className="mt-2 inline-block text-[11px] font-medium sm:text-xs group-hover:underline">
                {c.cta} &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
;
