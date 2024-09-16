import React from "react";
import CartList from "../CartList";
import { Wrapper } from "./styles";
import { CartType } from "@/types/cart";

interface CartGridProps {
  carts: CartType[];
  quantityOnChange: ({ id, value }: { id: string; value: number }) => void;
}

function CartGrid({ carts, quantityOnChange }: CartGridProps) {
  return (
    <Wrapper>
      {carts.map((cart) => {
        const imgUrl = cart.product.productImage[0].imgSrc;
        const size = cart.product.stock[0].size;
        const color = cart.product.stock[0].color;

        return (
          <CartList
            key={cart.id}
            id={cart.id}
            imgUrl={imgUrl}
            name={cart.product.name}
            size={size}
            color={color}
            quantity={cart.quantity}
            price={cart.product.price}
            discountByPercent={cart.product.discountByPercent}
            quantityOnChange={quantityOnChange}
          />
        );
      })}
    </Wrapper>
  );
}

export default CartGrid;
