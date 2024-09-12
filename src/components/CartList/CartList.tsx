import React from "react";
import DynamicImage from "../DynamicImage";
import { formatPrice } from "@/utils";
import {
  DetailWrapper,
  ImageWrapper,
  ProductAttributesWrapper,
  ProductLabel,
  ProductName,
  ProductNameWrapper,
  ProductPrice,
  ProductValue,
  Row,
} from "./styles";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

interface CartList {
  imgUrl: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  discountByPercent: number;
}

function CartList({
  imgUrl,
  name,
  size,
  color,
  quantity,
  price,
  discountByPercent,
}: CartList) {
  return (
    <Row>
      <ImageWrapper>
        <DynamicImage alt="" url={imgUrl} width={125} height={125} />
      </ImageWrapper>
      <DetailWrapper>
        <ProductNameWrapper>
          <ProductName>{name}</ProductName>
          <UnstyledButton>
            <Icon id="trash2" color="#FF3333" size={20} strokeWidth={2} />
          </UnstyledButton>
        </ProductNameWrapper>
        <ProductAttributesWrapper>
          <ProductLabel>Size: &nbsp;</ProductLabel>
          <ProductValue>{size}</ProductValue>
        </ProductAttributesWrapper>
        <ProductAttributesWrapper>
          <ProductLabel>Color: &nbsp;</ProductLabel>
          <ProductValue>{color}</ProductValue>
        </ProductAttributesWrapper>
        <ProductAttributesWrapper>
          <ProductLabel>Quantity: &nbsp;</ProductLabel>
          <ProductValue>{quantity}</ProductValue>
        </ProductAttributesWrapper>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </DetailWrapper>
    </Row>
  );
}

export default CartList;
