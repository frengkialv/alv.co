import React from "react";
import MainProductList from "../MainProductList";
import { ClothingsType } from "@/type";
import { Wrapper } from "./style";

function MainGrid({ datas }: { datas: ClothingsType[] }) {
  return (
    <Wrapper>
      {datas.map((data) => (
        <MainProductList
          key={data.slug}
          slug={data.slug}
          name={data.name}
          imgSrc={data.imgSrc}
          rating={data.rating}
          discountByPercent={data.discountByPercent}
          price={data.price}
        />
      ))}
    </Wrapper>
  );
}

export default MainGrid;
