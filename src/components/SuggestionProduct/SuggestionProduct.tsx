import React from "react";
import ProductGrid from "../ProductGrid";
import ButtonToNewArrival from "../SharedButtons/ButtonToNewArrival";
import {
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerNewArrival,
  Wrapper,
} from "./style";
import { ProductsType } from "@/types/product";

interface Props {
  data: ProductsType[];
  title: string;
}

async function SuggestionProduct({ data, title }: Props) {
  return (
    <Wrapper>
      <SpacerNewArrival />

      <HeaderTitle>{title}</HeaderTitle>

      <ProductGrid datas={data} />

      <ButtonWrapper>
        <ButtonToNewArrival />
      </ButtonWrapper>

      <SpacerNewArrival />

      <Dash />
    </Wrapper>
  );
}

export default SuggestionProduct;
