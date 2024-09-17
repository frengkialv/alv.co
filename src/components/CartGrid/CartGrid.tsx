import React from "react";
import CartList from "../CartList";
import { Wrapper } from "./styles";
import { CartType } from "@/types/cart";

interface CartGridProps {
  carts: CartType[];
  quantityOnChange: (id: string, quantity: number) => void;
  deleteProduct: (id: string) => void;
}

function CartGrid({ carts, quantityOnChange, deleteProduct }: CartGridProps) {
  return (
    <Wrapper>
      {carts.map((cart) => {
        const imgUrl = cart.product.productImage[0].imgSrc;
        const size = cart.product.stock[0].size;
        const color = cart.product.stock[0].color;
        const stockLeft = cart.product.stock[0].stock;
        const linkProduct = `/detail/${
          cart.product.categoryProduct.name
        }/${cart.product.name.replaceAll(" ", "+")}`;

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
            slug={linkProduct}
            quantityOnChange={quantityOnChange}
            deleteProduct={deleteProduct}
            stockLeft={stockLeft}
          />
        );
      })}
    </Wrapper>
  );
}

export default CartGrid;
