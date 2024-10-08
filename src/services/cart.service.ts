import { CartType } from "@/types/cart";
import { BaseHttpInstanceWithToken } from "./base.service";
import { CommonApiResponse } from "@/types/common";
import { ColorProduct, SizeProduct } from "@/types/stock";

interface AddCart {
  productId: string;
  quantity: number;
  color: ColorProduct;
  size: SizeProduct;
}

export async function getCart(): Promise<CommonApiResponse<CartType[]>> {
  const { data: resp } = await BaseHttpInstanceWithToken.get("/cart");

  return resp;
}

export async function addCart({
  productId,
  quantity,
  color,
  size,
}: AddCart): Promise<CommonApiResponse<CartType[]>> {
  const { data: resp } = await BaseHttpInstanceWithToken.post("/cart", {
    productId,
    quantity,
    color,
    size,
  });

  return resp;
}

export async function updateQuantityCart(id: string, quantity: number) {
  const url = `/cart/quantity/${id}`;
  const { data: resp } = await BaseHttpInstanceWithToken.put(url, {
    quantity: quantity,
  });

  return resp;
}

export async function deleteCart(id: string) {
  const url = `/cart/${id}`;
  const { data: resp } = await BaseHttpInstanceWithToken.delete(url);

  return resp;
}
