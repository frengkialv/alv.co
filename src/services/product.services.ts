import { PaginationDtoOut, ProductsType, Size } from "@/type";
import { BaseHttpInstance } from "./base.service";

interface QueryPropsGetProduct {
  page: number;
  price: string;
  productSize: string[];
  color: string[];
  category: string;
  sort: string;
}

export async function getProduct({
  page,
  price,
  productSize,
  color,
  category,
  sort,
}: QueryPropsGetProduct): Promise<PaginationDtoOut<ProductsType[]>> {
  let url = `/product?page=${page}&size=10&price=${price}&sort=${sort}&category=${category}`;

  if (color.length > 0) {
    let colorUrl = "";
    for (let i = 0; i < color.length; i++) {
      colorUrl += `&color=${color[i]}`;
    }

    url += colorUrl;
  }

  if (productSize.length > 0) {
    let productSizeUrl = "";
    for (let i = 0; i < productSize.length; i++) {
      productSizeUrl += `&productSize=${productSize[i]}`;
    }

    url += productSizeUrl;
  }

  const { data: resp } = await BaseHttpInstance.get(url);

  return resp;
}
