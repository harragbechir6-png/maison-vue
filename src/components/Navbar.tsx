"use client";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
      }}
    >
      <h2>MAISON VUE</h2>

      <div>
        Cart ({totalItems})
      </div>
    </nav>
  );
}