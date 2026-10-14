import img1 from "../../assets/categories/ImagePlaceholder.png";
import img2 from "../../assets/categories/ImagePlaceholder-1.png";
import img3 from "../../assets/categories/ImagePlaceholder-2.png";
import img4 from "../../assets/categories/ImagePlaceholder-3.png";
import img5 from "../../assets/categories/ImagePlaceholder-4.png";

const categories = [
  {
    id: "women",
    label: "Women",
    href: "#women",
    image: img1,
    alt: "Woman in a patterned brown wrap jacket",
    position: "center top",
  },
  {
    id: "men",
    label: "Men",
    href: "#men",
    image: img2,
    alt: "Man in a brown overshirt and trousers",
    position: "center top",
  },
  {
    id: "kids",
    label: "Kids",
    href: "#kids",
    image: img3,
    alt: "Three children sitting on white steps",
    position: "center",
  },
  {
    id: "new-in",
    label: "New in",
    href: "#new",
    image: img4,
    alt: "Olive green kaftan",
    position: "center top",
  },
  {
    id: "everyday",
    label: "Everyday basics",
    href: "#basics",
    image: img5,
    alt: "Everyday clothing",
    position: "center top",
  },
];

export default function Categories() {
  return (
    <section aria-label="Shop by category" className="bg-white py-8 lg:py-12">
      <ul className="mx-auto grid grid-cols-6 gap-x-3 gap-y-8 px-5 sm:px-8 md:grid-cols-5 lg:gap-x-[1.8%] lg:px-[120px]">
        {categories.map((category, index) => (
          <li
            key={category.id}
            className={`col-span-2 ${
              index === 3
                ? "col-start-2 md:col-start-auto"
                : index === 4
                  ? "col-start-4 md:col-start-auto"
                  : ""
            } md:col-span-1`}
          >
            <a href={category.href} className="group block text-center">
              <div className="aspect-[61/68] w-full overflow-hidden rounded-[38%] bg-stone-100">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  style={{
                    objectPosition: category.position,
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="mt-3 block font-fraunces text-[13px] font-light lg:text-[clamp(12px,1.1vw,16px)]">
                {category.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
