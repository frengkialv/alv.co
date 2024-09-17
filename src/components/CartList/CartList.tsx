import React from "react";
import DynamicImage from "../DynamicImage";
import { formatDiscountPrice, formatPrice } from "@/utils";
import {
  AdditionButton,
  AlertStock,
  BottomContent,
  DetailWrapper,
  DiscountFlag,
  EntityWrapper,
  ImageWrapper,
  PriceWrapper,
  ProductAttributesWrapper,
  ProductLabel,
  ProductName,
  ProductNameWrapper,
  ProductPrice,
  ProductValue,
  QuantitiInput,
  QuantitiOrderButtonWrapper,
  Row,
  SubtractionButton,
} from "./styles";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import Image from "next/image";
import Tooltip from "../Tooltip";

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
  quantityOnChange: (id: string, quantity: number) => void;
  deleteProduct: (id: string) => void;
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
  quantityOnChange,
  deleteProduct,
}: CartList) {
  return (
    <Row>
      <ImageWrapper href={slug}>
        <Image
          alt={name || ""}
          src={`data:image/jpeg;base64,${imgUrl}`}
          width={125}
          height={125}
          unoptimized
          style={{
            aspectRatio: "1.1 / 1",
            height: "auto",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </ImageWrapper>
      <DetailWrapper>
        <ProductNameWrapper>
          <ProductName href={slug}>{name}</ProductName>
          <Tooltip text="Delete product">
            <UnstyledButton onClick={() => deleteProduct(id)}>
              <Icon id="trash2" color="#FF3333" size={20} strokeWidth={2} />
            </UnstyledButton>
          </Tooltip>
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
              <AlertStock>
                Only {stockLeft} piece{stockLeft > 1 ? "s" : ""} left
              </AlertStock>
            )}
          </ProductAttributesWrapper>
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

          <QuantitiOrderButtonWrapper>
            <SubtractionButton
              onClick={() => {
                if (quantity === 1) {
                  return;
                }
                quantityOnChange(id, quantity - 1);
              }}
            >
              &#8722;
            </SubtractionButton>
            <QuantitiInput
              type="number"
              min="0"
              max="10"
              value={quantity}
              readOnly
            />
            <AdditionButton
              onClick={() => {
                if (quantity === 10) {
                  return;
                }
                quantityOnChange(id, quantity + 1);
              }}
            >
              +
            </AdditionButton>
          </QuantitiOrderButtonWrapper>
        </BottomContent>
      </DetailWrapper>
    </Row>
  );
}

export default CartList;
