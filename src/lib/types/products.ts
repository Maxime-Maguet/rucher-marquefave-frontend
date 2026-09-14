export type ProductImage = {
  id: string;
  url: string;
  altText: string | null;
};

export type ProductVariant = {
  poidsGramme: number;
  prix: number;
  stock: number;
};

export type Product = {
  id: string;
  nom: string;
  slug: string;
  resume: string | null;
  typeMiel: string | null;
  misEnAvant: boolean;
  estDisponible: boolean;
  categorie: {
    nom: string;
    slug: string;
  };
  images: ProductImage[];
  variantes: ProductVariant[];
};
