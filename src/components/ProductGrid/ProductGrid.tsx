import React from "react";
import ProductList from "../ProductList";
import { getNewestData } from "@/data";
import { ClothingsType } from "@/type";
import { Wrapper } from "./style";

function ProductGrid({ datas }: { datas: ClothingsType[] }) {
  return (
    <Wrapper>
      {datas.map((data) => (
        <ProductList
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

export default ProductGrid;
