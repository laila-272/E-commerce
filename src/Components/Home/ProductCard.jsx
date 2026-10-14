export default function ProductCard({ product }) {
  const { name, sizes, price, badge, image, alt } = product;
  return (
    <article className="group">
      <a href="#product" className="block">
        <div className="relative aspect-[79/95] overflow-hidden rounded-[3px] bg-cream">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {badge && (
            <span className="absolute right-[2.5%] top-[1.5%] min-w-[29%] rounded-full bg-white px-3 py-[5px] text-center text-[9px] font-medium leading-none text-ink">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-serif text-[13px] leading-snug">{name}</h3>
        <p className="mt-0.5 text-[10px] text-mist">{sizes}</p>
        <p className="mt-1 text-[11px] font-semibold">{price}</p>
      </a>
    </article>
  );
}
