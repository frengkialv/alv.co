import React from "react";
import MainProductList from "../MainProductList";
import { ProductsType } from "@/type";
import { Wrapper } from "./style";

function MainGrid({ datas }: { datas: ProductsType[] }) {
  return (
    <Wrapper>
      {datas.map((data) => {
        const imgSrc = data.productImage[0].imgSrc;

        return (
          <MainProductList
            key={data.id}
            slug={data.name}
            title={data.brand.name}
            name={data.name}
            imgSrc={imgSrc}
            rating={5}
            discountByPercent={data.discountByPercent}
            price={data.price}
          />
        );
      })}
    </Wrapper>
  );
}

export default MainGrid;
