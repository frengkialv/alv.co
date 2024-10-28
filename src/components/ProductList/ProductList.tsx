import React from "react";
import {
  DiscountFlag,
  Name,
  Price,
  PriceDiscount,
  PriceWrapper,
  ProductListWrapper,
  RatingDuplicate,
  RatingNumber,
  RatingWrapper,
  Row,
  Title,
} from "./style";
import { formatDiscountPrice } from "@/utils";
import { ProductGridProps } from "@/types/product";
import ImagePrimitive from "../ImagePrimitive";

function ProductList({
  slug,
  title,
  name,
  imgSrc,
  rating,
  discountByPercent,
  price,
  categoryProduct,
}: ProductGridProps) {
  const linkProduct = `/detail/${categoryProduct}/${slug.replaceAll(" ", "+")}`;

  return (
    <ProductListWrapper href={linkProduct}>
      <ImagePrimitive
        alt={name || ""}
        src={imgSrc}
        width={500}
        height={600}
        categoryProduct={categoryProduct}
        style={{
          marginBottom: "16px",
        }}
      />

      <Row>
        <Title>{title}</Title>

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
            <DiscountFlag>{discountByPercent}</DiscountFlag>
          )}
        </PriceWrapper>
      </Row>
    </ProductListWrapper>
  );
}

export default ProductList;
