import React from "react";
import Icon from "../Icon";
import {
  Column,
  DiscountFlag,
  Price,
  PriceDiscount,
  ProductCareColumn,
  ProductCareDescription,
  ProductCareIconTitle,
  ProductCareIconWrapper,
  ProductCareTitle,
  ProductDescription,
  ProductName,
  ProductPrice,
  RatingComponent,
  RatingNumber,
  RatingWrapper,
  Wrapper,
} from "./style";
import ColorOption from "../ColorOption";
import SizeOption from "../SizeOption";
import AddToCartContent from "../AddToCartContent";
import MachineWashIcon from "../SVG/MachineWashIcon";

function ProductContent() {
  return (
    <Wrapper>
      <Column>
        <ProductName>One Life Graphic T-shirt</ProductName>
        <RatingWrapper>
          <RatingComponent />
          <RatingNumber>4.5/5</RatingNumber>
        </RatingWrapper>
        <ProductPrice>
          <PriceDiscount>260</PriceDiscount>

          <Price $color={"#999999"} $lineDecoration={"line-through"}>
            300
          </Price>

          <DiscountFlag>-40%</DiscountFlag>
        </ProductPrice>
        <ProductDescription>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </ProductDescription>
      </Column>
      <Column>
        <ProductCareTitle>Material & Care</ProductCareTitle>
        <ProductCareColumn>
          <ProductCareIconWrapper>
            <Icon id="scissors" strokeWidth={1.5} />
            <ProductCareIconTitle>Material</ProductCareIconTitle>
          </ProductCareIconWrapper>
          <ProductCareDescription>
            88% Polyester, 12% Nylon
          </ProductCareDescription>
        </ProductCareColumn>
        <ProductCareColumn>
          <ProductCareIconWrapper>
            <MachineWashIcon />
            <ProductCareIconTitle>Care Label</ProductCareIconTitle>
          </ProductCareIconWrapper>
          <ProductCareDescription>Machine washable</ProductCareDescription>
        </ProductCareColumn>
      </Column>
      <Column>
        <ColorOption />
      </Column>
      <Column>
        <SizeOption />
      </Column>
      <Column>
        <AddToCartContent />
      </Column>
    </Wrapper>
  );
}

export default ProductContent;
