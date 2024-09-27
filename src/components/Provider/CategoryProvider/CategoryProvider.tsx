"use client";
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChildrenProps } from "@/types/common";
import { CategoryPathnames, SortOptions } from "@/constants";

interface CategoryContextValue {
  showFilterTablet: boolean;
  setShowFilterTablet: (val: boolean) => void;
  showFilterMobile: boolean;
  setShowFilterMobile: (val: boolean) => void;
  isLoading: boolean;
  setisLoading: (val: boolean) => void;
  currentPath: string;

  // Price Filter
  priceFilter: number[];
  setPriceFilter: (price: number[]) => void;

  // Color Filter
  colorsFilter: string[];
  setColorsFilter: (price: string[]) => void;

  // Size Filter
  sizesFilter: string[];
  setSizesFilter: (price: string[]) => void;

  // Sort Filter
  sort: string;
  setSort: (price: string) => void;

  onChangePageHandler: (page: number) => void;
  onChangeSortHandler: (sort: string) => void;

  //Submit Filter
  submitFilter: () => void;
}

interface SearchParams {
  price?: string;
  color?: string[];
  sort?: string;
}

export const CategoryContext = React.createContext<CategoryContextValue>(null!);

function CategoryProvider({ children }: ChildrenProps) {
  const router = useRouter();

  const pathname = usePathname(); // Get the current pathname

  const searchParams = useSearchParams(); // Get the query parameters

  const baseUrl = `${pathname}?`;

  const [currentPath, setCurrentPath] = React.useState<string>("");
  const [showFilterTablet, setShowFilterTablet] =
    React.useState<boolean>(false);
  const [showFilterMobile, setShowFilterMobile] =
    React.useState<boolean>(false);
  const [isLoading, setisLoading] = React.useState<boolean>(false);

  const [priceFilter, setPriceFilter] = React.useState<number[]>([0, 0]);
  const [colorsFilter, setColorsFilter] = React.useState<string[]>([]);
  const [sizesFilter, setSizesFilter] = React.useState<string[]>([]);
  const [sort, setSort] = React.useState<string>(SortOptions[0].value);

  React.useEffect(() => {
    const cleanPathname = pathname.startsWith("/")
      ? pathname.slice(1)
      : pathname;

    if (
      cleanPathname !== pathname &&
      CategoryPathnames.includes(cleanPathname)
    ) {
      setCurrentPath(cleanPathname);
      resetAllState();
    }
  }, [pathname]);

  React.useEffect(() => {
    const params = Object.fromEntries(searchParams.entries()); // Mengubah searchParams menjadi objek

    if (Object.keys(params).length > 0) {
      queryFormat(params);
    }
  }, [searchParams]);

  const queryFormat = (params: SearchParams) => {
    if (params.hasOwnProperty("sort")) {
      const nextSort = params.sort!;
      setSort(nextSort);
    } else {
      setSort(SortOptions[0].value);
    }

    if (params.hasOwnProperty("price")) {
      let parts = params.price!.split("-");

      // Mengambil nilai sebelum '-' (bagian pertama)
      let minPrice = Number(parts[0]);

      // Mengambil nilai sesudah '-' (bagian kedua)
      let maxPrice = Number(parts[1]);

      const nextPrice = [minPrice, maxPrice];
      setPriceFilter(nextPrice);
    } else {
      setPriceFilter([0, 0]);
    }

    if (params.hasOwnProperty("color")) {
      const nextColors = searchParams.getAll("color");

      setColorsFilter(nextColors);
    } else {
      setColorsFilter([]);
    }

    if (params.hasOwnProperty("productSize")) {
      const nextSizes = searchParams.getAll("productSize");

      setSizesFilter(nextSizes);
    } else {
      setSizesFilter([]);
    }
  };

  const resetAllState = () => {
    setPriceFilter([0, 0]);
    setColorsFilter([]);
    setSizesFilter([]);
    setSort(SortOptions[0].value);
  };

  const onChangePageHandler = (page: number) => {
    setisLoading(true);

    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", String(page));

    router.push(`${baseUrl}${newParams.toString()}`);

    window.setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };

  const onChangeSortHandler = (sort: string) => {
    setisLoading(true);

    const newParams = new URLSearchParams(searchParams);
    setSort(sort);

    newParams.set("sort", sort);
    router.push(`${baseUrl}${newParams.toString()}`);

    window.setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };

  const submitFilter = async () => {
    setisLoading(true);

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("color"); // Delete all query 'color' in params
    newParams.delete("productSize"); // Delete all query 'color' in params
    newParams.set("page", "1");

    if (priceFilter[0] !== 0 || priceFilter[1] !== 0) {
      const nextPrice = `${priceFilter[0]}-${priceFilter[1]}`;
      newParams.set("price", nextPrice);
    }

    if (colorsFilter.length > 0) {
      for (let i = 0; i < colorsFilter.length; i++) {
        newParams.append("color", colorsFilter[i]);
      }
    }

    if (sizesFilter.length > 0) {
      for (let i = 0; i < sizesFilter.length; i++) {
        newParams.append("productSize", sizesFilter[i]);
      }
    }

    router.push(`${baseUrl}${newParams}`);

    window.setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };

  const value = {
    showFilterTablet,
    setShowFilterTablet,
    showFilterMobile,
    setShowFilterMobile,
    isLoading,
    setisLoading,
    currentPath,

    priceFilter,
    setPriceFilter,
    colorsFilter,
    setColorsFilter,
    sizesFilter,
    setSizesFilter,
    sort,
    setSort,
    onChangePageHandler,
    onChangeSortHandler,
    submitFilter,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
