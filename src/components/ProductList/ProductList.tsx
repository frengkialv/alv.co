import React from "react";
import DynamicImage from "../DynamicImage";
import {
  DiscountFlag,
  ImageWrapper,
  Name,
  Price,
  PriceDiscount,
  PriceWrapper,
  ProductListWrapper,
  RatingDuplicate,
  RatingNumber,
  RatingWrapper,
  Row,
} from "./style";
import { formatDiscountPrice } from "@/utils";
import { ProductGridProps } from "@/types/product";

function ProductList({
  slug,
  name,
  imgSrc,
  rating,
  discountByPercent,
  price,
  categoryProduct,
}: ProductGridProps) {
  return (
    <ProductListWrapper slug={slug}>
      <ImageWrapper>
        <DynamicImage url={imgSrc} alt="" width={300} height={300} />
      </ImageWrapper>

      <Row>
        <Name>{name}</Name>
        <RatingWrapper>
          <RatingDuplicate rating={rating} />
          <RatingNumber>{rating}/5</RatingNumber>
        </RatingWrapper>
        <PriceWrapper>
          {discountByPercent && (
            <PriceDiscount>
              {formatDiscountPrice(price, discountByPercent)}
            </PriceDiscount>
          )}

          <Price
            color={discountByPercent ? "#999999" : undefined}
            lineDecoration={discountByPercent ? "line-through" : undefined}
          >
            {price}
          </Price>

          {discountByPercent && (
            <DiscountFlag>{discountByPercent}%</DiscountFlag>
          )}
        </PriceWrapper>
      </Row>
    </ProductListWrapper>
  );
}

export default ProductList;
