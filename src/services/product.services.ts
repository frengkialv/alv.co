import { BaseHttpInstance } from "./base.service";
import { ProductsType } from "@/types/product";
import { CommonApiResponse } from "@/types/common";

export async function getProducts(
  searchParams: { [key: string]: string },
  paramsCategory: string
) {
  try {
    const query = getQueryData(searchParams);

    let url;

    if (paramsCategory === "brand") {
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/product?brand=${searchParams.brand}${query}`;
    } else {
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/product?category=${paramsCategory}${query}`;
    }

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return "Internal server error";
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
}

export async function getProductsForDisplay(
  category: string,
  totalData: number
) {
  let url = `/product/display/${category}/${totalData}`;

  const { data: resp } = await BaseHttpInstance.get(url);

  return resp;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function getQueryData(searchParams: { [key: string]: string }) {
  let query = "";

  if (searchParams.hasOwnProperty("page")) {
    const page = searchParams.page;
    query += `&page=${page}&size=10`;
  } else {
    query += "&page=1&size=10";
  }

  if (searchParams.hasOwnProperty("sort")) {
    const sort = searchParams.sort;
    query += `&sort=${sort}`;
  } else {
    query += "&sort=popularity";
  }

  if (Object.keys(searchParams).length === 0) {
    return query;
  }

  if (searchParams.hasOwnProperty("price")) {
    let parts = searchParams.price!.split("-");

    // Mengambil nilai sebelum '-' (bagian pertama)
    let minPrice = Number(parts[0]);

    // Mengambil nilai sesudah '-' (bagian kedua)
    let maxPrice = Number(parts[1]);

    query += `&price=${minPrice}-${maxPrice}`;
  }

  if (searchParams.hasOwnProperty("color")) {
    const colors = searchParams.color;

    const arrColors = Array.isArray(colors) ? colors : [colors];

    arrColors.forEach((color) => {
      query += `&color=${color}`;
    });
  }

  if (searchParams.hasOwnProperty("productSize")) {
    const productSize = searchParams.productSize;

    const arrProductSizes = Array.isArray(productSize)
      ? productSize
      : [productSize];

    arrProductSizes.forEach((productSize) => {
      query += `&productSize=${productSize}`;
    });
  }

  return query;
}

export async function getProductByName(
  name: string
): Promise<CommonApiResponse<ProductsType>> {
  const url = `product/detail/name/${name}`;

  const { data: resp } = await BaseHttpInstance.get(url);

  return resp;
}
