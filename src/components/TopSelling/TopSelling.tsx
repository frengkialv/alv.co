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

async function TopSelling() {
  const datas = await getProductsForDisplay("on-sale", 4);

  return (
    <Wrapper>
      <SpacerTopSelling />

      <HeaderTitle>TOP SELLING</HeaderTitle>

      <ProductGrid datas={datas} />

      <ButtonWrapper>
        <Button>View All</Button>
      </ButtonWrapper>

      <SpacerTopSelling />

      <Dash />
    </Wrapper>
  );
}

export default TopSelling;
