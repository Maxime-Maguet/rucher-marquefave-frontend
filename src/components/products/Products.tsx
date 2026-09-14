import { getProducts } from "@/lib/api/products";
import { Product } from "@/lib/types/products";

export default async function Products() {
  const products = await getProducts();
  return (
    <section>
      <h1>Products ({products.length})</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>{product.nom}</li>
        ))}
      </ul>
    </section>
  );
}
