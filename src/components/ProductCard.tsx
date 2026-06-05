"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1.5rem",
        background: "white",
      }}
    >
      <p>{product.brand}</p>

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}