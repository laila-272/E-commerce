
import { useState } from "react";

const columns = [
  {
    title: "SHOP",
    links: [
      { label: "Women", href: "#women" },
      { label: "Men", href: "#men" },
      { label: "Kids", href: "#kids" },
      { label: "New arrivals", href: "#new" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Your bag", href: "#cart" },
      { label: "Delivery & returns", href: "#delivery" },
      { label: "Size guide", href: "#size-guide" },
    ],
  },
  {
    title: "BRAND",
    links: [
      { label: "Our story", href: "#story" },
      { label: "Materials", href: "#materials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [openColumn, setOpenColumn] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1D1B1A] px-5 py-8 text-[#F7F4EF] sm:px-8 sm:py-10 lg:px-[7.7%] lg:pt-10">
      {/* Newsletter */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-10">
        <div>
          <h2 className="font-fredericka text-[26px] leading-tight sm:text-3xl lg:text-4xl">
            Good clothes, good company.
          </h2>

          <p className="mt-2 max-w-md text-xs leading-5 text-[#D0CDCA] sm:text-sm sm:leading-6">
            New pieces, fabric stories and practical care notes. Sent
            occasionally.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <label
            htmlFor="newsletter-email"
            className="mb-2 block text-[11px] font-medium sm:text-xs"
          >
            Email address
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 w-full min-w-0 rounded-lg border border-[#3B3735] bg-white px-4 text-xs text-[#282522] outline-none transition-all duration-200 placeholder:text-[#8C8681] focus:border-[#C95738] focus:ring-1 focus:ring-[#C95738] sm:text-sm"
            />

            <button
              type="submit"
              className="h-11 w-full shrink-0 rounded-lg bg-[#C95738] px-6 text-xs font-medium text-white transition-colors duration-200 hover:bg-[#AD452B] focus:outline-none focus:ring-2 focus:ring-[#C95738] focus:ring-offset-2 focus:ring-offset-[#1D1B1A] sm:w-auto sm:rounded-full sm:text-sm"
            >
              Join us
            </button>
          </div>
        </form>
      </div>

      {/* Footer Content */}
      <div className="mt-10 grid grid-cols-1 gap-y-5 sm:mt-12 sm:grid-cols-4 sm:gap-6 lg:mt-[60px] lg:grid-cols-[1.7fr_0.8fr_0.8fr_0.7fr] lg:gap-8">
        {/* Brand */}
        <div className="col-span-1">
          <a
            href="/"
            aria-label="Home"
            className="inline-flex h-8 items-center justify-center rounded-lg border border-[#E0DCD7] px-4 text-[10px] tracking-[0.15em] transition hover:bg-white hover:text-[#1D1B1A] sm:h-[34px] sm:px-5 sm:text-[11px]"
          >
            LOGO
          </a>

          <h3 className="mt-4 text-lg sm:mt-5 sm:text-xl lg:text-2xl">
            Woven for everyone.
          </h3>

          <p className="mt-2 max-w-sm text-xs leading-5 text-[#BDB9B5] sm:text-sm sm:leading-6">
            Everyday clothes, thoughtfully made for every body.
          </p>
        </div>

        {/* Dropdown Columns */}
        {columns.map((column) => {
          const isOpen = openColumn === column.title;

          return (
            <div
              key={column.title}
              className="border-b border-[#55514D] pb-3 sm:border-0 sm:pb-0"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenColumn(isOpen ? null : column.title)
                }
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between text-left sm:cursor-default"
              >
                <h4 className="text-[10px] font-semibold tracking-[0.12em] sm:text-[11px]">
                  {column.title}
                </h4>

                <span
                  aria-hidden="true"
                  className="text-lg leading-none sm:hidden"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <ul
                className={`grid transition-[grid-template-rows,opacity] duration-300 sm:mt-4 sm:grid-rows-[1fr] sm:opacity-100 ${
                  isOpen
                    ? "mt-3 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0 sm:mt-4"
                }`}
              >
                <li className="overflow-hidden">
                  <ul className="space-y-2.5 sm:space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-xs text-[#BDB9B5] transition-colors hover:text-white sm:text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar */}
      <div className="mt-9 border-t border-[#55514D] pt-4 sm:mt-12 sm:pt-5 lg:mt-[55px]">
        <p className="text-[10px] text-[#A9A5A1] sm:text-[11px]">
          © {new Date().getFullYear()} nesel. Made with care in Egypt.
        </p>
      </div>
    </footer>
  );
}
