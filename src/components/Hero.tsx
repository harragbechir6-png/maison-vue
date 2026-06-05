export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem",
      }}
    >
      <p
        style={{
          textTransform: "uppercase",
          letterSpacing: "4px",
          marginBottom: "1rem",
        }}
      >
        New Collection 2026
      </p>

      <h1
        style={{
          fontSize: "5rem",
          fontWeight: 300,
          marginBottom: "1rem",
        }}
      >
        See the World Through Art
      </h1>

      <p
        style={{
          maxWidth: "600px",
          lineHeight: 1.8,
        }}
      >
        Meticulously crafted eyewear where precision meets poetry.
        Each frame is designed for people who appreciate exceptional
        craftsmanship.
      </p>
    </section>
  );
}