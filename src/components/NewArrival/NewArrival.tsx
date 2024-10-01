import React from "react";
import ProductGrid from "../ProductGrid";
import {
  Button,
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerNewArrival,
  Wrapper,
} from "./style";
import { getProductsForDisplay } from "@/services/product.services";

async function NewArrival() {
  const datas = await getProductsForDisplay("new-arrival", 4);

  return (
    <Wrapper>
      <SpacerNewArrival />

      <HeaderTitle>NEW ARRIVALS</HeaderTitle>

      <ProductGrid datas={datas} />

      <ButtonWrapper>
        <Button>View All</Button>
      </ButtonWrapper>

      <SpacerNewArrival />

      <Dash />
    </Wrapper>
  );
}

export default NewArrival;
