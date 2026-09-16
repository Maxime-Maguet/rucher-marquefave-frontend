// Server Component — no parameters accepted by Next.js loading convention
export default function Loading() {
  return (
    <main>
      <section
        role="status"
        aria-live="polite"
        className="px-6 py-10 max-w-3xl mx-auto animate-pulse"
      >
        <p className="sr-only">Chargement des produits…</p>
        {/* Skeleton heading — mirrors <h1>Products (…)</h1> */}
        <div className="h-7 w-48 rounded-md bg-honey-light mb-6" />

        {/* Skeleton list — 4 placeholder rows */}
        <ul className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <li
              key={i}
              className="h-5 rounded-md bg-cream-dark"
              style={{ width: `${60 + (i % 3) * 10}%` }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
