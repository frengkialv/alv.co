"use client";
import React from "react";
import ProductGrid from "../ProductGrid";
import {
  Button,
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerTopSelling,
  Wrapper,
} from "./style";
import { getProductsForDisplay } from "@/services/product.services";
import { ProductsType } from "@/types/product";

function TopSelling() {
  const [products, setProducts] = React.useState<ProductsType[]>([]);

  React.useEffect(() => {
    fetchDataNewArrival();
  }, []);

  const fetchDataNewArrival = async () => {
    try {
      const { data } = await getProductsForDisplay("on-sale", 4);
      console.log("🚀 ~ fetchDataNewArrival ~ data:", data);

      setProducts(data);
    } catch (error) {
      console.log("🚀 ~ fetchDataNewArrival ~ error:", error);
    }
  };

  return (
    <Wrapper>
      <SpacerTopSelling />

      <HeaderTitle>TOP SELLING</HeaderTitle>

      <ProductGrid datas={products} />

      <ButtonWrapper>
        <Button>View All</Button>
      </ButtonWrapper>

      <SpacerTopSelling />

      <Dash />
    </Wrapper>
  );
}

export default TopSelling;
