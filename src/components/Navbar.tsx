"use client";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b bg-white">
      <h2 className="text-2xl font-light tracking-[0.3em]">
        MAISON VUE
      </h2>

      <div className="flex items-center gap-6">
        <button className="text-sm hover:opacity-70">
          Search
        </button>

        <button className="text-sm hover:opacity-70">
          Account
        </button>

        <button className="text-sm hover:opacity-70">
          Cart ({totalItems})
        </button>
      </div>
    </nav>
  );
}