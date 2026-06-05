"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border p-6 hover:shadow-lg transition">
      <div className="aspect-square bg-stone-100 mb-4"></div>

      <p className="text-xs uppercase tracking-widest text-amber-700">
        {product.brand}
      </p>

      <Link href={`/products/${product.id}`}>
        <h3 className="text-xl mt-2 mb-2 hover:underline cursor-pointer">
          {product.name}
        </h3>
      </Link>

      <p className="mb-4 font-medium">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full border py-3 hover:bg-black hover:text-white transition"
      >
        Add To Cart
      </button>
    </div>
  );
}