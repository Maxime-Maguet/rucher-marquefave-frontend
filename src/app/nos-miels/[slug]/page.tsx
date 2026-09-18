import { getProduct } from "@/lib/api/products";

export default async function Miel({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const miel = await getProduct(slug);

  return (
    <main className="pt-20">
      <h1>{miel.nom}</h1>
    </main>
  );
}
