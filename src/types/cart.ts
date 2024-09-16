import { ColorProduct, SizeProduct } from "./stock";
import { ProductsType } from "./product";

export interface CartType {
  id: string;
  quantity: number;
  color: ColorProduct;
  size: SizeProduct;
  userId: string;
  productId: string;
  product: ProductsType;
}
