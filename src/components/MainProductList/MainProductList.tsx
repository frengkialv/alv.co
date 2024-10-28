import React from "react";
import Image from "next/image";
import { formatDiscountPrice, formatPrice } from "@/utils";
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
  Title,
} from "./style";
import { ProductGridProps } from "@/types/product";
import ImagePrimitive from "../ImagePrimitive";

function MainProductList({
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
    <ProductListWrapper slug={linkProduct}>
      <ImageWrapper>
        <ImagePrimitive
          alt={name || ""}
          src={imgSrc}
          width={500}
          height={600}
          categoryProduct={categoryProduct}
        />
      </ImageWrapper>

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
              {formatPrice(formatDiscountPrice(price, discountByPercent))}
            </PriceDiscount>
          )}

          <Price
            color={discountByPercent ? "#999999" : undefined}
            lineDecoration={discountByPercent ? "line-through" : undefined}
          >
            {formatPrice(price)}
          </Price>

          {discountByPercent && (
            <DiscountFlag>{discountByPercent}</DiscountFlag>
          )}
        </PriceWrapper>
      </Row>
    </ProductListWrapper>
  );
}

export default MainProductList;
