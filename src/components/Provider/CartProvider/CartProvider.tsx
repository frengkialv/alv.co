"use client";
import React from "react";
import { getCookie } from "cookies-next";
import { ChildrenProps } from "@/types/common";
import { CartType } from "@/types/cart";
import { getCart } from "@/services/cart.service";

interface CartContextValue {
  carts: CartType[];
  fetchDataCart: () => void;
  setCarts: (carts: CartType[]) => void;
}

export const CartContext = React.createContext<CartContextValue>(null!);

function CartProvider({ children }: ChildrenProps) {
  const accessToken = getCookie("access_token");
  const [carts, setCarts] = React.useState<CartType[]>([]);

  React.useEffect(() => {
    if (accessToken) {
      fetchCartHandler();
    }
  }, []);

  const fetchCartHandler = async () => {
    try {
      const { data } = await getCart();

      setCarts(data);
    } catch (error) {
      console.log("🚀 ~ fetchCartHandler ~ error:", error);
    }
  };

  const value = {
    carts,
    setCarts,
    fetchDataCart: fetchCartHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
