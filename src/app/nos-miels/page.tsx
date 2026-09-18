import { getProducts } from "@/lib/api/products";
import Link from "next/link";
export default async function NosMiels() {
  const miels = await getProducts();

  return (
    <main className="pt-20">
      <h1>Nos Miels</h1>
      <ul>
        {miels.map((miel) => (
          <li key={miel.id}>
            <Link href={`/nos-miels/${miel.slug}`}>{miel.nom}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
