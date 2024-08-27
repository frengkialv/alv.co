import React from "react";
import { getTopSellingData } from "@/data";
import {
  Button,
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerTopSelling,
  Wrapper,
} from "./style";
import ProductGrid from "../ProductGrid";

function TopSelling() {
  const datas = getTopSellingData(4);

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
