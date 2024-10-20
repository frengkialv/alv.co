import React from "react";
import {
  DiscountFlag,
  ImagePrimitive,
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
import Image from "next/image";

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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <ImagePrimitive
          alt={name || ""}
          src={`data:image/jpeg;base64,${imgSrc}`}
          width={200}
          height={200}
          unoptimized
          style={{
            objectPosition:
              categoryProduct === "t-shirts"
                ? "top center"
                : categoryProduct === "shoes"
                ? "center 30%"
                : "center 70%",
          }}
        />
      </div>

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
