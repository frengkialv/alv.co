import { ColorProduct, SizeProduct, StockType } from "@/types/stock";
import { BaseHttpInstance } from "./base.service";
import { CommonApiResponse } from "@/types/common";

interface GetStockQuantity {
  productId: string;
  color: ColorProduct;
  size: SizeProduct;
}

export async function getStockQuantity({
  productId,
  color,
  size,
}: GetStockQuantity): Promise<CommonApiResponse<StockType>> {
  const url = `/stock/quantity?productId=${productId}&color=${color}&size=${size}`;

  const { data: resp } = await BaseHttpInstance.get(url);

  return resp;
}
