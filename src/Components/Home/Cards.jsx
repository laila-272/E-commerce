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
      className="bg-[#F8F4EF] py-10 lg:py-[5.5vw]"
    >
      <ul className="mx-auto grid  gap-10 px-5 sm:px-8 md:grid-cols-3 md:gap-[4.5%] lg:px-[120px]">
        {cards.map((c) => (
          <li key={c.id}>
            <a href={c.href} className="group block">
              <div className="aspect-[146/155] overflow-hidden rounded-t-xl bg-line">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-mist">
                {c.label}
              </p>
              <h3 className="mt-1.5 font-fredericka text-[22px] leading-tight lg:text-[clamp(18px,1.6vw,26px)]">
                {c.title}
              </h3>
              <span className="mt-1.5 inline-block text-[11px] font-medium group-hover:underline">
                {c.cta} &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
