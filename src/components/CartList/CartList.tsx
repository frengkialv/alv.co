import React from "react";
import DynamicImage from "../DynamicImage";
import { formatDiscountPrice, formatPrice } from "@/utils";
import {
  AdditionButton,
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
  quantityOnChange: ({ id, value }: { id: string; value: number }) => void;
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
  quantityOnChange,
}: CartList) {
  return (
    <Row>
      <ImageWrapper>
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
          <ProductName>{name}</ProductName>
          <Tooltip text="Delete product">
            <UnstyledButton>
              <Icon id="trash2" color="#FF3333" size={20} strokeWidth={2} />
            </UnstyledButton>
          </Tooltip>
        </ProductNameWrapper>
        <EntityWrapper>
          <ProductAttributesWrapper>
            <ProductLabel>Size: &nbsp;</ProductLabel>
            <ProductValue>{size}</ProductValue>
          </ProductAttributesWrapper>
          <ProductAttributesWrapper>
            <ProductLabel>Color: &nbsp;</ProductLabel>
            <ProductValue>{color}</ProductValue>
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
              onClick={() => quantityOnChange({ id: id, value: quantity - 1 })}
            >
              &#8722;
            </SubtractionButton>
            <QuantitiInput type="number" min="0" value={quantity} readOnly />
            <AdditionButton
              onClick={() => quantityOnChange({ id: id, value: quantity + 1 })}
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
