import { ProductsType } from "./product";

export interface ProductSoldType {
  id: string;
  rating: number | null;
  descriptionRating: string;
  date: Date;
  productId: string;
  userId: string;
  product: ProductsType;
}
