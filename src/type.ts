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

export interface ProductGridProps {
  slug: string;
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
