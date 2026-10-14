
import img1 from "../../assets/3.png";

export default function CollectionBanner() {
  return (
    <section
      id="the-linen-edit"
      aria-labelledby="collection-title"
      className="relative"
    >
      {/* Banner Image */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={img1} />
        <img
          src={img1}
          alt="Models in black and grey oversized cotton pieces against a soft plaster wall"
          className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9] sm:object-[right_center] lg:aspect-[383/215]"
        />
      </picture>

      {/* Content */}
      <div className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:absolute lg:left-[120px] lg:top-[24.6%] lg:flex lg:h-[52.6%] lg:w-[42.4%] lg:flex-col lg:justify-center lg:px-[3.4%] lg:py-0">
        <p className="label mb-2 text-[10px] text-ink/80 sm:mb-3 sm:text-xs">
          The linen edit
        </p>

        <h2
          id="collection-title"
          className="font-fredericka text-[26px] leading-[1.12] tracking-tight sm:text-[32px] lg:text-[clamp(24px,2.9vw,46px)]"
        >
          Light on the skin.
          <br />
          Easy on the day.
        </h2>

        <p className="mt-2 max-w-[380px] font-inter text-[11px] leading-relaxed text-ink/75 sm:mt-3 sm:text-[12px] lg:text-[clamp(11px,0.95vw,14px)]">
          Fine fabrics, thoughtful fits, timeless essentials, ready for
          everyday.
        </p>

        <div className="mt-4 sm:mt-5">
          <a
            href="#linen"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#24302B] bg-[#000] px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#24302B] sm:px-8 sm:text-sm"
          >
            Discover linen
          </a>
        </div>
      </div>
    </section>
  );
}
;
