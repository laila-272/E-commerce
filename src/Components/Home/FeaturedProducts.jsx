// import { images } from "./images";
import img1 from "../../assets/33.png";
import img2 from "../../assets/cards/Image-1.png";
import img3 from "../../assets/cards/Image-2.png";
import img4 from "../../assets/cards/Image-3.png";
import img5 from "../../assets/cards/Image-4.png";
import img6 from "../../assets/cards/Image-5.png";
import img7 from "../../assets/cards/Image-6.png";
import img8 from "../../assets/cards/Image-7.png";
export const productFilters = [
  "All",
  "Women",
  "Men",
  "Kids",
  "New in",
  "Basics",
];

export const products = [
  {
    id: 1,
    name: "Relaxed linen shirt",
    sizes: "Sizes XS to XL",
    price: "EGP 1,295",
    // badge: "Bestseller",
    tags: ["Women", "Basics"],
    image: img1,
    alt: "Woman in a tan relaxed linen shirt and trousers",
  },
  {
    id: 2,
    name: "Cotton pull-on shirt",
    sizes: "Sizes S to XL",
    price: "EGP 1,150",
    // badge: "New",
    tags: ["Women", "New in"],
    image: img2,
    alt: "Woman in a striped pull-on shirt and blue jeans",
  },
  {
    id: 3,
    name: "Soft silhouette",
    sizes: "Sizes XS to L",
    price: "EGP 770",
    // badge: "New",
    tags: ["Women", "New in"],
    image: img3,
    alt: "Woman in a rust knit and trousers on a terracotta chair",
  },
  {
    id: 4,
    name: "Woven midi dress",
    sizes: "Sizes XS to XL",
    price: "EGP 1,995",
    // badge: "New",
    tags: ["Women", "New in"],
    image: img4,
    alt: "Woman in an olive green woven jacket and wide trousers",
  },
  {
    id: 5,
    name: "Boxed cotton shirt",
    sizes: "Sizes S to XL",
    price: "EGP 1,180",
    // badge: "Bestseller",
    tags: ["Men", "Basics"],
    image: img5,
    alt: "Model in a pale blue boxy shirt and trousers",
  },
  {
    id: 6,
    name: "Loopback maxi skirt",
    sizes: "Sizes XS to L",
    price: "EGP 1,350",
    // badge: "New",
    tags: ["Women", "New in"],
    image: img6,
    alt: "Two women in layered shirts and brown wide trousers",
  },
  {
    id: 7,
    name: "Textured batik robe",
    sizes: "Sizes S to XL",
    price: "EGP 2,490",
    // badge: "New",
    tags: ["Women", "Men"],
    image: img7,
    alt: "Long red batik robe worn open",
  },
  {
    id: 8,
    name: "Play all day tee",
    sizes: "Ages 3 to 10",
    price: "EGP 490",
    // badge: "Kids",
    tags: ["Kids", "Basics"],
    image: img8,
    alt: "Children playing on white steps in soft cotton clothes",
  },
];

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
// import { products, productFilters } from "../data/products";

export default function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? products
      : products.filter((p) => p.tags.includes(active));

  return (
    <section
      id="new"
      aria-labelledby="featured-title"
      className="bg-white py-10 lg:py-14"
    >
      <div className="mx-auto  px-5 sm:px-8 lg:px-[120px]">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="featured-title"
            className="font-serif text-[26px] leading-tight lg:text-[clamp(26px,2.4vw,36px)]"
          >
            New, but made to last
          </h2>
          <a
            href="#new"
            className="hidden shrink-0 items-center gap-2 text-[12px] font-medium sm:inline-flex"
          >
            Shop all new arrivals <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </div>

        <div
          role="group"
          aria-label="Filter products"
          className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3  "
        >
          {productFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`shrink-0  rounded-full border px-3.5 py-1 text-[11px] transition-colors  ${
                active === f
                  ? "border-black bg-black text-white"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 lg:gap-x-[1.8%] lg:gap-y-10">
          {visible.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
        <a
          href="#new"
          className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium sm:hidden"
        >
          Shop all new arrivals <ArrowRight size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
