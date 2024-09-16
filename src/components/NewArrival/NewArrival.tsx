import React from "react";
import ProductGrid from "../ProductGrid";
import { getNewestData } from "@/data";
import {
  Button,
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerNewArrival,
  Wrapper,
} from "./style";

function NewArrival() {
  const datas = getNewestData(4);
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
