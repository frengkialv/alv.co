import React from "react";
import { formatDiscountPrice, formatPrice, truncateString } from "@/utils";
import {
  AlertStock,
  BottomContent,
  DetailWrapper,
  DiscountFlag,
  EntityWrapper,
  ImageWrapper,
  PriceWrapper,
  ProductAttributesWrapper,
  ProductLabel,
  ProductNameDekstop,
  ProductNamePhone,
  ProductNameWrapper,
  ProductPrice,
  ProductValue,
  Row,
  SelectMobileWrapper,
} from "./styles";
import SelectQTYMobile from "../SelectQTYMobile";
import QuantityOrderButtonDesktop from "../SharedButtons/QuantityOrderButtonDesktop";
import DeleteCartButton from "../SharedButtons/DeleteCartButton";
import ImagePrimitive from "../ImagePrimitive";

interface CartList {
  id: string;
  imgUrl: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  discountByPercent: number | null;
  stockLeft: number;
  slug: string;
  category: string;
}

function CartList({
  id,
  imgUrl,
  name,
  size,
  color,
  quantity,
  price,
  discountByPercent,
  stockLeft,
  slug,
  category,
}: CartList) {
  return (
    <Row>
      <ImageWrapper href={slug}>
        <ImagePrimitive
          alt={name || ""}
          src={imgUrl}
          width={500}
          height={600}
          categoryProduct={category}
        />
      </ImageWrapper>
      <DetailWrapper>
        <ProductNameWrapper>
          <ProductNameDekstop href={slug}>{name}</ProductNameDekstop>
          <ProductNamePhone href={slug}>
            {truncateString(name, 30)}
          </ProductNamePhone>

          <DeleteCartButton id={id} />
        </ProductNameWrapper>

        <EntityWrapper>
          <ProductAttributesWrapper>
            <ProductLabel>Color: &nbsp;</ProductLabel>
            <ProductValue>{color}</ProductValue>
          </ProductAttributesWrapper>
          <ProductAttributesWrapper>
            <ProductLabel>Size: &nbsp;</ProductLabel>
            <ProductValue>{size}</ProductValue>

            {stockLeft && stockLeft <= 5 && (
              <AlertStock>{stockLeft} left</AlertStock>
            )}
          </ProductAttributesWrapper>

          <SelectMobileWrapper>
            <SelectQTYMobile
              id={id}
              label="Qty:"
              stockLeft={stockLeft}
              value={quantity}
            />
          </SelectMobileWrapper>
        </EntityWrapper>

        <BottomContent>
          <PriceWrapper>
            {discountByPercent && (
              <ProductPrice>
                {formatPrice(
                  formatDiscountPrice(price, discountByPercent) * quantity
                )}
              </ProductPrice>
            )}

            <ProductPrice
              style={{
                color: discountByPercent ? "#999999" : undefined,
                textDecoration: discountByPercent ? "line-through" : undefined,
              }}
            >
              {formatPrice(price * quantity)}
            </ProductPrice>

            {discountByPercent && (
              <DiscountFlag>{discountByPercent}%</DiscountFlag>
            )}
          </PriceWrapper>

          <QuantityOrderButtonDesktop
            id={id}
            quantity={quantity}
            stockLeft={stockLeft}
          />
        </BottomContent>
      </DetailWrapper>
    </Row>
  );
}

export default CartList;
