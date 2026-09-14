import { Product } from "@/lib/types/products";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products: Product[] = await response.json();
  console.log("[getProducts]", response.status, `${process.env.API_URL}/products`);
  console.log(JSON.stringify(products, null, 2));
  return products;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(
    `${process.env.API_URL}/products/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};
