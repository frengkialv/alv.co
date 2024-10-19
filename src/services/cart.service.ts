import { CartType } from "@/types/cart";
import { BaseHttpInstanceWithToken } from "./base.service";
import { CommonApiResponse } from "@/types/common";
import { ColorProduct, SizeProduct } from "@/types/stock";
import { getCookie } from "cookies-next";

interface AddCart {
  productId: string;
  quantity: number;
  color: ColorProduct;
  size: SizeProduct;
}

const accessToken = getCookie("access_token");

export async function getCart(): Promise<CommonApiResponse<CartType[]>> {
  const { data: resp } = await BaseHttpInstanceWithToken.get("/cart");

  return resp;
}

export async function getCarts() {
  try {
    console.log("🚀 ~ getCarts ~ accessToken:", accessToken);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cart`;

    const res = await fetch(url, {
      cache: "no-store",
      headers: { authorization: accessToken! },
    });

    if (!res.ok) {
      throw new Error("Oops! Something wicked happened.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("🚀 ~ getCarts ~ error:", error);
    throw new Error("Oops! Something wicked happened.");
  }
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
