import React from "react";
import { ProductGridProps } from "@/type";
import { formatDiscountPrice } from "@/utils";
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
import Image from "next/image";

function MainProductList({
  slug,
  title,
  name,
  imgSrc,
  rating,
  discountByPercent,
  price,
}: ProductGridProps) {
  return (
    <ProductListWrapper slug={slug}>
      <ImageWrapper>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            alt={name || ""}
            src={`data:image/jpeg;base64,${imgSrc}`}
            width={200}
            height={200}
            unoptimized
            style={{
              width: "100%",
              aspectRatio: "0.8 / 1",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>
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

export default MainProductList;
