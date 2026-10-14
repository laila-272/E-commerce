
import img1 from "../../assets/cards/1.jpeg";
import img2 from "../../assets/cards/2.jpeg";

const perks = [
  "Free delivery over EGP 2,000",
  "Free delivery over EGP 2,000",
  "Designed for every body",
  "Easy 14-day returns",
  "Made for real life",
  "Made for real life",
  "Made for real life",
  "Made for real life",
  "Made for real life",
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative bg-[#F8F4EF] pb-12 lg:pb-0 overflow-hidden"
    >
      <div className="grid lg:min-h-[680px] lg:max-h-[800px] lg:grid-cols-[40.4%_34.2%_25.4%]">
        {/* Hero Content */}
        <div className="flex flex-col px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-0 lg:pb-24 lg:pl-[120px] lg:pr-10 lg:pt-25">
          <p className="label mb-4 text-[12px] font-semibold text-ink/80 sm:text-[14px] lg:text-[16px]">
            THE NEW COTTON EDIT
          </p>

          <h1
            id="hero-title"
            className="font-fredericka text-[clamp(46px,12vw,64px)] font-normal leading-[1.04] sm:text-[72px] lg:text-[clamp(44px,6.1vw,96px)]"
          >
            Made to
            <br />
            feel
            <br />
            like you.
          </h1>

          <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-ink/80 sm:text-[14px] lg:text-[clamp(16px,1vw,26px)]">
            Soft structure, honest fabric and room to move. Everyday clothing,
            woven for everyone.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#new"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[linear-gradient(90deg,#C65A3A_0%,rgba(80,44,33,0.81)_100%)] px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:text-sm"
            >
              Shop new arrivals
            </a>

            <a
              href="#edit"
              className="inline-flex min-h-10 items-center justify-center rounded-full border-2 border-[#24302B] bg-[#F8F4EF] px-5 py-2 text-xs font-semibold text-[#24302B] transition-colors hover:bg-[#EAE2D8] sm:px-8 sm:text-sm"
            >
              Explore the edit
            </a>
          </div>
        </div>

        {/* Hero Images */}
        <div className="grid grid-cols-[1.32fr_1fr] overflow-hidden lg:contents">
          <img
            src={img1}
            alt="Two men in neutral relaxed knitwear against a plaster wall"
            className="h-full min-h-[280px] w-full object-cover sm:min-h-[420px] "
          />

          <img
            src={img2}
            alt="Woman in a rust sweater seated on a terracotta armchair"
            className="h-full min-h-[280px] w-full object-cover object-left sm:min-h-[420px] "
          />
        </div>
      </div>

      {/* Moving Perks Bar */}
      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden bg-[#F8F4EF]/90 text-ink backdrop-blur-sm">
        <div className="perks-track flex w-max items-center">
          {[0, 1].map((group) => (
            <ul
              key={group}
              aria-hidden={group === 1 ? "true" : undefined}
              className="flex shrink-0 items-center gap-8 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] sm:gap-14 sm:px-12 sm:py-4 sm:text-xs lg:gap-16 lg:px-16 lg:py-5"
            >
              {perks.map((p, index) => (
                <li
                  key={`${group}-${index}`}
                  className="shrink-0 whitespace-nowrap"
                >
                  {p}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
