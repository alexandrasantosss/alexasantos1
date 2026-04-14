import Link from "next/link";

interface ProductCardProps {
  id: string | number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  badge?: string | null;
}

export default function ProductCard({ id, name, category, price, originalPrice, image, badge }: ProductCardProps) {
  const getBadgeColors = (badgeName: string | null | undefined) => {
    switch (badgeName) {
      case "Popular":
        return "bg-tertiary-fixed text-on-tertiary-fixed";
      case "New":
        return "bg-primary text-on-primary";
      case "Sale":
        return "bg-error text-on-error";
      default:
        return "bg-surface text-on-surface";
    }
  };

  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-surface-container-low aspect-[4/5] mb-6">
        <img
          className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
          src={image}
          alt={name}
        />
        {badge && (
          <div
            className={`absolute top-4 left-4 ${getBadgeColors(badge)} px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm`}
          >
            {badge}
          </div>
        )}
        <button className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
        </button>
      </div>
      <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1 block">{category}</span>
      <h4 className="text-primary font-headline font-bold text-lg">{name}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className={originalPrice ? "text-error font-semibold" : "text-on-surface font-semibold"}>${price}</span>
        {originalPrice && <span className="text-on-surface-variant line-through text-sm">${originalPrice}</span>}
      </div>
    </Link>
  );
}
