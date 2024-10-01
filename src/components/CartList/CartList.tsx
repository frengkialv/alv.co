import React from "react";
import { formatDiscountPrice, formatPrice } from "@/utils";
import {
  AdditionButton,
  AlertStock,
  BottomContent,
  DetailWrapper,
  DiscountFlag,
  EntityWrapper,
  ImagePrimitive,
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
  category: string;
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
  category,
  quantityOnChange,
  deleteProduct,
}: CartList) {
  return (
    <Row>
      <ImageWrapper href={slug}>
        <ImagePrimitive
          alt={name || ""}
          src={`data:image/jpeg;base64,${imgUrl}`}
          width={125}
          height={125}
          unoptimized
          $category={category}
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
              <Icon
                id="minus"
                size={18}
                strokeWidth={1.5}
                color={quantity === 1 ? "#898b8f" : "#000000"}
              />
            </SubtractionButton>
            <QuantitiInput
              type="number"
              min="0"
              max="10"
              value={quantity}
              readOnly
            />
            <AdditionButton
              disabled={quantity === 10 || quantity >= stockLeft}
              onClick={() => {
                quantityOnChange(id, quantity + 1);
              }}
            >
              <Icon
                id="plus"
                size={18}
                strokeWidth={1.5}
                color={
                  quantity === 10 || quantity >= stockLeft
                    ? "#898b8f"
                    : "#000000"
                }
              />
            </AdditionButton>
          </QuantitiOrderButtonWrapper>
        </BottomContent>
      </DetailWrapper>
    </Row>
  );
}

export default CartList;
