import Link from "next/link";
import { Suspense } from "react";
import AddToCartButton from "../../../components/AddToCartButton";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-24 pb-20 max-w-[1440px] mx-auto px-8 w-full flex-grow">
      {/* Breadcrumbs */}
      <nav className="mb-12">
        <ul className="flex items-center gap-2 text-xs font-medium tracking-widest text-on-surface-variant uppercase">
          <li>
            <Link className="hover:text-primary transition-colors" href="/products">
              Equipment
            </Link>
          </li>
          <li className="material-symbols-outlined text-[10px]">chevron_right</li>
          <li>
            <Link className="hover:text-primary transition-colors" href="/products">
              Backpacks
            </Link>
          </li>
          <li className="material-symbols-outlined text-[10px]">chevron_right</li>
          <li className="text-primary">{product.name}</li>
        </ul>
      </nav>

      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Hero Image Column */}
        <div className="lg:col-span-7 relative">
          <div className="bg-surface-container-low rounded-lg overflow-hidden group">
            <img
              alt={product.name}
              className="w-full h-auto object-cover rounded-sm transform group-hover:scale-105 transition-transform duration-700"
              src={product.image}
            />
          </div>
          {/* Detail Insets */}
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="bg-surface-container rounded-lg p-1 overflow-hidden">
              <img
                alt="Backpack detail"
                className="w-full aspect-square object-cover rounded-sm"
                src="https://images.unsplash.com/photo-1527685216565-1e7f2f845ded?w=600&q=80&fit=crop"
              />
            </div>
            <div className="bg-surface-container rounded-lg p-1 overflow-hidden mt-4">
              <img
                alt="Backpack harness"
                className="w-full aspect-square object-cover rounded-sm"
                src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&q=80&fit=crop"
              />
            </div>
          </div>
        </div>

        {/* Product Details Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex flex-col gap-6">
            <div>
              {product.badge && (
                <span className={`inline-block px-3 py-1 ${product.badge === 'Popular' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : product.badge === 'New' ? 'bg-primary text-on-primary' : product.badge === 'Sale' ? 'bg-error text-on-error' : 'bg-surface text-on-surface'} text-[10px] font-bold uppercase tracking-widest rounded-full mb-4`}>
                  {product.badge}
                </span>
              )}
              <h1 className="text-5xl font-extrabold tracking-tighter text-primary leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-2xl font-medium text-secondary">${product.price}.00</p>
                {product.originalPrice && (
                  <p className="text-xl text-on-surface-variant line-through">${product.originalPrice}.00</p>
                )}
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed font-body">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Available Colors
              </span>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-transparent hover:border-outline-variant transition-all flex items-center justify-center text-[10px] font-bold text-on-surface-variant bg-surface-container-high"
                    title={color}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Size</span>
                <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-3 border border-primary bg-surface-container-lowest text-primary font-bold text-xs tracking-widest">
                  {product.size}
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col gap-3">
              <AddToCartButton productName={product.name} />
              <button className="w-full py-4 bg-transparent border border-outline-variant text-primary font-bold text-xs tracking-widest uppercase hover:bg-surface-container-low transition-colors">
                Find in Store
              </button>
            </div>

            {/* Features Summary */}
            <div className="grid grid-cols-2 gap-4 py-8 border-t border-outline-variant/20 mt-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">water_drop</span>
                <div>
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Weatherproof</p>
                  <p className="text-[10px] text-on-surface-variant">TPU-film laminate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <div>
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Warranty</p>
                  <p className="text-[10px] text-on-surface-variant">Lifetime Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Tabs / Sections */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Tech Specs */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-tertiary-fixed-dim text-xs font-bold tracking-widest uppercase">Performance</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Tech Specs</h2>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4">
              <span className="text-sm font-medium text-on-surface-variant">Capacity</span>
              <span className="text-sm font-bold text-primary">25 Liters (1,526 cu in)</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4">
              <span className="text-sm font-medium text-on-surface-variant">Weight</span>
              <span className="text-sm font-bold text-primary">650 g (1 lb 6.9 oz)</span>
            </div>
            <div className="flex justify-between items-baseline border-b border-outline-variant/20 pb-4">
              <span className="text-sm font-medium text-on-surface-variant">Dimensions</span>
              <span className="text-sm font-bold text-primary">22" x 10.5" x 5.5"</span>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium text-on-surface-variant">Materials</span>
              <p className="text-sm leading-relaxed text-on-surface">
                8.7-oz 300-denier 100% postconsumer recycled polyester ripstop with a TPU-film laminate and a DWR (durable water repellent) finish.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="bg-surface-container-low p-10 rounded-xl space-y-8">
          <div className="space-y-2">
            <span className="text-on-primary-container text-xs font-bold tracking-widest uppercase">Impact</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Sustainability</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Recycled Polyester</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Fabric is certified as bluesign® approved, reducing the environmental footprint of manufacturing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Fair Trade Certified™</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Sewn in a Fair Trade Certified™ factory, which means the people who made this product earned a premium for their labor.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Editorial/Imagery Break */}
      <section className="mt-32">
        <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
          <img
            alt="In action"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1564417947365-8dbc9d0a718b?w=1440&q=80&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-16">
            <div className="max-w-xl">
              <h3 className="text-4xl font-extrabold text-surface tracking-tighter mb-4">
                Built for the Wild, Designed for the Day.
              </h3>
              <p className="text-surface-container-highest/90 text-lg leading-relaxed">
                The Black Hole® collection is forged from the needs of alpine climbers, refined for the daily commute. Waiter-resistant, life-proof, and forever functional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
