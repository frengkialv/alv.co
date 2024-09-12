export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SVGProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface OptionsType {
  value: string;
  label: string;
}

export enum Size {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  "X-Large" = "x-large",
}

export enum ColorEnum {
  BLACK = "black",
  WHITE = "white",
  ORANGE = "orange",
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
  YELLOW = "yellow",
  GRAY = "gray",
}

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

export interface ProductsType {
  id: string;
  name: string;
  description: string;
  price: number;
  discountByPercent: number | null;
  material: string;
  releaseDate: Date;
  stock: StockType[];
  brand: Brand;
  categoryProduct: CategoryProduct;
  productImage: ProductImage[];
}

export interface StockType {
  id: string;
  color: ColorEnum;
  size: Size;
  stock: number;
}

export interface Brand {
  id: string;
  name: string;
}

export interface CategoryProduct {
  id: string;
  name: string;
}

export interface ProductImage {
  id: string;
  imgSrc: string;
  imageIndex: number;
}

export interface ProductGridProps {
  slug: string;
  title?: string;
  name: string;
  imgSrc: string;
  rating: number;
  discountByPercent: number | null;
  price: number;
}

export interface ClothingOrdersProps {
  slug: string;
  name: string;
  imgSrc: string;
  price: number;
  discountByPercent: number | null;
  quantity: number;
  size: Size;
  colors: string;
}

export interface PaginationDtoOut<T> extends CommonApiResponse<T> {
  currentPage: number;
  message: string;
  totalPages: number;
}

export interface CommonApiResponse<T> {
  message: string;
  data: T;
}
