
import img from "../../assets/BrandHistory2.png";

const values = [
  {
    title: "Honest fabrics",
    text: "Breathable linen, soft cotton and natural blends chosen to feel good and last for years.",
  },
  {
    title: "Simple shapes",
    text: "Clean cuts and easy proportions that move with you and layer with what you already own.",
  },
  {
    title: "Colours that last",
    text: "A palette you can mix and wear for years, one season.",
  },
];

export default function BrandStorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative isolate overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center lg:object-right-top"
      />

      {/* Optional overlay for readability */}
      {/* <div className="absolute inset-0 -z-10 bg-[#F8F4EF]/30" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[49.6vw] lg:px-[120px] lg:pt-[7%] lg:pb-10">
        {/* Story Heading */}
        <div className="max-w-[560px] lg:max-w-[46%]">
          <h2
            id="story-title"
            className="font-fredericka text-[clamp(26px,6vw,36px)] leading-[1.1] tracking-tight sm:text-[40px] lg:text-[clamp(34px,4.3vw,66px)]"
          >
            Clothes are made
            <br />
            of threads.
            <br />
            <span className="text-[#C65A3A]">So are people.</span>
          </h2>

          <p className="my-4 hidden max-w-[380px] text-[12px] leading-relaxed text-ink/80 lg:block lg:text-[clamp(11px,0.95vw,14px)]">
            Every piece we make begins with a simple idea: clothes should feel
            as good as the people who wear them. Thoughtful design, shared
            together.
          </p>

          <a
            href="#about-us"
            className="mt-2 inline-block border-b border-ink pb-0.5 text-[11px] font-medium uppercase tracking-[0.1em]"
          >
            Read our story
          </a>
        </div>

        {/* Brand Values */}
        {/* Brand Values */}
        <ul className="mt-10 hidden grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-auto lg:grid lg:gap-x-[6%]">
          {values.map((v) => (
            <li key={v.title} className="max-w-[300px]">
              <h3 className="font-fraunces text-[14px] sm:text-[15px] lg:text-[clamp(12px,1.05vw,16px)]">
                {v.title}
              </h3>

              <p className="mt-1 text-[10px] leading-[1.4] text-ink/70 sm:text-[11px] lg:text-[clamp(10px,0.8vw,13px)]">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
