import { products } from "@/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-stone-100"></div>

        <div>
          <p className="uppercase tracking-widest text-sm">
            {product.brand}
          </p>

          <h1 className="text-5xl mt-4 mb-6">
            {product.name}
          </h1>

          <p className="text-2xl mb-8">
            ${product.price}
          </p>

          <button className="px-8 py-4 bg-black text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}