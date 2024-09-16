export interface ClothingsType {
  slug: string;
  name: string;
  imgSrc: string;
  price: number;
  rating: number;
  discountByPercent: number | null;
  stock: number;
  sold: number;
  size: string[];
  colors: string[];
  releaseDate: Date;
}
