import * as React from "react";

interface PARAMSLABELPROPS {
  [key: string]: string;
}

export const PARAMSLABEL: PARAMSLABELPROPS = {
  "t-shirts": "T-Shirts",
  shoes: "Shoes",
  accessories: "Accessories",
  sport: "Sport",
  "on-sale": "On Sale",
  "new-arrivals": "New Arrivals",
};

export interface SVGProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface CommonApiResponse<T> {
  message: string;
  data: T;
}

export interface PaginationDtoOut<T> extends CommonApiResponse<T> {
  currentPage: number;
  message: string;
  totalPages: number;
}
