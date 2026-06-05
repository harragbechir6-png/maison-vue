import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section
      style={{
        padding: "4rem",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Featured Frames
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "2rem",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}