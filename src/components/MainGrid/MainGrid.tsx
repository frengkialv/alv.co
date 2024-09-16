import React from "react";
import MainProductList from "../MainProductList";
import { Wrapper } from "./style";
import { ProductsType } from "@/types/product";

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
            categoryProduct={data.categoryProduct.name}
          />
        );
      })}
    </Wrapper>
  );
}

export default MainGrid;
