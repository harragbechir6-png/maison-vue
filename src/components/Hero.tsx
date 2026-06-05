export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center px-16">
      <div className="max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-amber-700">
          New Collection 2026
        </p>

        <h1 className="text-7xl font-light leading-tight mb-8">
          See the World
          <br />
          Through Art
        </h1>

        <p className="text-gray-600 text-lg leading-8 max-w-xl">
          Meticulously crafted eyewear where precision meets
          poetry. Each frame is designed for people who
          appreciate exceptional craftsmanship.
        </p>

        <button className="mt-10 px-8 py-4 bg-black text-white hover:opacity-90 transition">
          Shop Collection
        </button>
      </div>
    </section>
  );
}