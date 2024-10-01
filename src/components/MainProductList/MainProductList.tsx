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
              objectPosition:
                categoryProduct === "t-shirts"
                  ? "top center"
                  : categoryProduct === "shoes"
                  ? "center 30%"
                  : "center 70%",
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
