"use client";
import React from "react";
import { ChildrenProps } from "@/type";

interface CategoryContextValue {
  showFilterTablet: boolean;
  setShowFilterTablet: (val: boolean) => void;
  showFilterMobile: boolean;
  setShowFilterMobile: (val: boolean) => void;
}

export const CategoryContext = React.createContext<CategoryContextValue>(null!);

function CategoryProvider({ children }: ChildrenProps) {
  const [showFilterTablet, setShowFilterTablet] =
    React.useState<boolean>(false);
  const [showFilterMobile, setShowFilterMobile] =
    React.useState<boolean>(false);

  const value = {
    showFilterTablet,
    setShowFilterTablet,
    showFilterMobile,
    setShowFilterMobile,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
