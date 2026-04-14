"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../../data/products";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "New", value: "New" },
  { label: "Waterproof", value: "Waterproof" },
  { label: "Limited Edition", value: "Limited Edition" },
  { label: "In Stock", value: "instock" },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = products.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "instock") return p.inStock;
    return p.badge === activeFilter;
  });

  return (
    <main className="pt-24 pb-20 max-w-[1440px] mx-auto px-8">

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-3">
          The Technical Series
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
          Durable Carry Systems
        </h1>
        <p className="text-on-surface-variant max-w-xl leading-relaxed">
          Engineered for high-altitude pursuit and daily resilience. Our backpacks utilize recycled ripstop and weather-sealed hardware.
        </p>
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-outline-variant/20">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border transition-all ${activeFilter === f.value
                ? "bg-primary text-on-primary border-primary"
                : "bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-on-surface-variant font-medium">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className={`group flex flex-col bg-surface rounded-xl border border-outline-variant/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${!product.inStock ? "opacity-60" : ""}`}
          >
            {/* Image */}
            <div className="relative aspect-square bg-surface-container-low overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge */}
              {product.badge && (
                <span className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${product.badge === "New"
                  ? "bg-primary text-on-primary"
                  : product.badge === "Waterproof"
                    ? "bg-blue-100 text-blue-800"
                    : product.badge === "Limited Edition"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-surface text-on-surface"
                  }`}>
                  {product.badge}
                </span>
              )}
              {/* Out of stock overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant bg-surface px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 p-4 gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                {product.category}
              </p>
              <h2 className="text-sm font-bold text-primary leading-snug line-clamp-2">
                {product.name}
              </h2>
              <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2 flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold text-primary">€{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-on-surface-variant line-through">€{product.originalPrice}</span>
                  )}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-colors ${product.inStock
                  ? "border-primary text-primary group-hover:bg-primary group-hover:text-on-primary"
                  : "border-outline-variant text-on-surface-variant cursor-not-allowed"
                  }`}>
                  {product.inStock ? "Add to cart" : "Sold out"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
