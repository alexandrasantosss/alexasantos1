"use client";

import { useState } from "react";

export default function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    alert(`Added ${productName} to your cart!`);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full py-5 font-bold text-sm tracking-widest uppercase transition-colors shadow-sm active:scale-[0.98] duration-150 ${
        added
          ? "bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed"
          : "bg-primary text-on-primary hover:bg-primary-container"
      }`}
    >
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
