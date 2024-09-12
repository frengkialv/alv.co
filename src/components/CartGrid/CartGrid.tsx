import React from "react";
import CartList from "../CartList";
import { Wrapper } from "./styles";

function CartGrid() {
  const datas = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      {datas.map((data) => (
        <CartList
          key={data}
          imgUrl="/assets/checkered-shirt.png"
          name="Gradient Graphic T-shirt"
          size="Large"
          color="White"
          quantity={2}
          price={145}
          discountByPercent={10}
        />
      ))}
    </Wrapper>
  );
}

export default CartGrid;
