import React from "react";
import ProductList from "../ProductList";
import { Wrapper } from "./style";
import { ProductsType } from "@/types/product";

function ProductGrid({ datas }: { datas: ProductsType[] }) {
  return (
    <Wrapper>
      {datas.map((data) => {
        const imgSrc = data.productImage[0].imgSrc;

        return (
          <ProductList
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

export default ProductGrid;
