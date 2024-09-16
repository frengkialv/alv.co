import { ProductSoldType } from "./productSold";
import { ProductImageType } from "./productImage";
import { StockType } from "./stock";
import { BrandType } from "./brand";
import { CategoryProductType } from "./categoryProduct";

export interface ProductGridProps {
  slug: string;
  title?: string;
  name: string;
  imgSrc: string;
  rating: number;
  discountByPercent: number | null;
  price: number;
  categoryProduct: string;
}

export interface ProductsType {
  id: string;
  name: string;
  description: string;
  price: number;
  discountByPercent: number | null;
  material: string;
  releaseDate: Date;
  stock: StockType[];
  brand: BrandType;
  categoryProduct: CategoryProductType;
  productImage: ProductImageType[];
  productSold: ProductSoldType[];
}
