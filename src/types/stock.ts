export enum ColorProduct {
  BLACK = "black",
  WHITE = "white",
  ORANGE = "orange",
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
  YELLOW = "yellow",
  GRAY = "gray",
  PURPLE = "purple",
  PINK = "pink",
  "LIGHT-BLUE" = "lightBlue",
}

export enum SizeProduct {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  "X-LARGE" = "x-large",
}

export interface StockType {
  id: string;
  color: ColorProduct;
  size: SizeProduct;
  stock: number;
}
