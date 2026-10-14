import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/Logo.png";


const announcements = [
  { text: "Free delivery over EGP 2,000", align: "text-left" },
  { text: "Easy 14-day returns", align: "text-center" },
  { text: "Cash on delivery available", align: "text-right" },
  { text: "Cash on delivery available", align: "text-right" },
  // { text: "Cash on delivery available", align: "text-right" },
  // { text: "Cash on delivery available", align: "text-right" },
];

const links = [
  { label: "Women", href: "#women", mega: true },
  { label: "Men", href: "#men" },
  { label: "Kids", href: "#kids" },
  { label: "Shop all", href: "#shop-all" },
  { label: "Our story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const megaColumns = [
  {
    title: "Clothing",
    items: [
      { label: "All women", href: "#women" },
      { label: "Tops & T-shirts", href: "#women-tops" },
      { label: "Shirts & Blouses", href: "#women-shirts" },
      { label: "Dresses", href: "#women-dresses" },
      { label: "Skirts", href: "#women-skirts" },
      { label: "Trousers & Shorts", href: "#women-trousers" },
      { label: "Knitwear", href: "#women-knitwear" },
      { label: "Outerwear", href: "#women-outerwear" },
    ],
  },
  {
    title: "By fabric",
    items: [
      { label: "Cotton", href: "#fabric-cotton" },
      { label: "Linen", href: "#fabric-linen" },
      { label: "Organic cotton", href: "#fabric-organic-cotton" },
      { label: "Knit", href: "#fabric-knit" },
    ],
  },
  {
    title: "Featured",
    items: [
      { label: "New arrivals", href: "#new", accent: true },
      { label: "Everyday basics", href: "#basics" },
      { label: "The soft structure edit", href: "#soft-structure" },
      { label: "The linen edit", href: "#the-linen-edit" },
    ],
  },
];

const iconButton = "p-1.5 text-ink hover:text-terracotta";
const linkBase =
  "font-inter text-[14px] lg:text-[15px] text-[#625E57] transition-colors duration-200 hover:text-black";
function MegaMenu({ id }) {
  return (
    <div
      id={id}
      className="absolute inset-x-0 top-full z-40 border-b border-line border-t bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-8 px-8 pb-10 pt-8 lg:grid-cols-[repeat(3,minmax(0,220px))] lg:gap-20 lg:px-[6.3%]">
        {megaColumns.map((col) => (
          <section key={col.title} aria-labelledby={`${id}-${col.title}`}>
            <h3
              id={`${id}-${col.title}`}
              className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#625E57]"
            >
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-[13px] font-medium hover:text-[#C65A3A] transition-colors ${
                      item.accent ? "text-terracotta" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ id, onClose }) {
  const [womenOpen, setWomenOpen] = useState(false);
  const womenId = useId();

  return (
    <nav
      id={id}
      aria-label="Mobile"
      className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-t border-line bg-white md:hidden"
    >
      <ul className="px-5 py-2 text-[14px]">
        {links.map((l) => (
          <li key={l.label} className="border-b border-line/70 last:border-0">
            {l.mega ? (
              <>
                <button
                  type="button"
                  aria-expanded={womenOpen}
                  aria-controls={womenId}
                  onClick={() => setWomenOpen((o) => !o)}
                  className="flex w-full items-center justify-between py-3.5"
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={womenOpen ? "rotate-180" : ""}
                    aria-hidden="true"
                  />
                </button>
                {womenOpen && (
                  <div id={womenId} className="pb-4 ">
                    {megaColumns.map((col) => (
                      <div key={col.title} className="mt-3 first:mt-0">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-mist">
                          {col.title}
                        </p>
                        <ul className="space-y-2.5 pl-1">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={onClose}
                                className={`text-[13px] ${item.accent ? "text-terracotta" : "text-ink"}`}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href={l.href} onClick={onClose} className="block py-3.5">
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  // Desktop mega menu: opens on hover, "pinned" once clicked so it survives mouse-out until toggled/clicked away.
  const [mega, setMega] = useState({ open: false, pinned: false });
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef(null);
  const megaId = useId();
  const mobileId = useId();

  const closeAll = useCallback(() => {
    setMega({ open: false, pinned: false });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) closeAll();
    };
    const onKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeAll]);

  const hoverOpen = () =>
    setMega((m) => (m.open ? m : { open: true, pinned: false }));
  const hoverClose = () =>
    setMega((m) => (m.pinned ? m : { open: false, pinned: false }));
  const toggleClick = () =>
    setMega((m) =>
      m.open && m.pinned
        ? { open: false, pinned: false }
        : { open: true, pinned: true },
    );

  return (
    <header ref={rootRef} id="top" className="sticky top-0 z-50">
      {/* Announcement bar */}

      <div className="overflow-hidden bg-[#1D1D1B] text-white">
        <div className="announcement-track flex h-8 w-max items-center">
          {[0, 1].map((group) => (
            <ul key={group} className="flex shrink-0 items-center">
              {announcements.map((a, i) => (
                <li
                  key={`${group}-${i}`}
                  className="shrink-0 px-20 whitespace-nowrap text-sm sm:px-24 sm:text-base"
                >
                  {a.text}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Main bar + mega menu share one hover boundary so the cursor can travel between them */}
      <div className="relative" onMouseLeave={hoverClose}>
        <div className="border-b border-line bg-white">
          <div className="mx-auto grid h-14 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-16 lg:px-[6.3%]">
            {/* Left */}
            <div className="flex items-center">
              <button
                type="button"
                className={`${iconButton} -ml-1.5 md:hidden`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls={mobileId}
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <Menu size={20} strokeWidth={1.5} />
                )}
              </button>

              <nav aria-label="Primary" className="hidden md:block">
                <ul className="flex items-center gap-3.5 lg:gap-7">
                  {links.map((l) => (
                    <li
                      key={l.label}
                      onMouseEnter={
                        l.mega
                          ? hoverOpen
                          : () => setMega({ open: false, pinned: false })
                      }
                    >
                      {l.mega ? (
                        <button
                          type="button"
                          aria-expanded={mega.open}
                          aria-controls={megaId}
                          aria-haspopup="true"
                          onClick={toggleClick}
                          className={`${linkBase} py-5 ${mega.open ? "text-terracotta" : ""}`}
                        >
                          {l.label}
                        </button>
                      ) : (
                        <a href={l.href} className={`${linkBase} block py-5`}>
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Center: true center because both outer columns are 1fr */}
            <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />

            {/* Right */}
            <div className="flex items-center justify-end gap-1 sm:gap-2.5">
              <button type="button" aria-label="Search" className={iconButton}>
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Account"
                className={`${iconButton} hidden md:block`}
              >
                <User size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Shopping bag"
                className={`${iconButton} -mr-1.5 md:mr-0`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {mega.open && (
          <div className="hidden md:block">
            <MegaMenu id={megaId} />
          </div>
        )}
        {mobileOpen && <MobileMenu id={mobileId} onClose={closeAll} />}
      </div>
    </header>
  );
}
