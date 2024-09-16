import { CartType } from "@/types/cart";
import { BaseHttpInstanceWithToken } from "./base.service";
import { CommonApiResponse } from "@/types/common";

export async function getCart(): Promise<CommonApiResponse<CartType[]>> {
  const { data: resp } = await BaseHttpInstanceWithToken.get("/cart");

  return resp;
}
