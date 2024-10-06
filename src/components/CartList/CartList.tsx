import React from "react";
import { formatDiscountPrice, formatPrice } from "@/utils";
import {
  AdditionButton,
  AlertStock,
  BottomContent,
  DeleteButtonDekstop,
  DeleteButtonMobile,
  DetailWrapper,
  DiscountFlag,
  EntityWrapper,
  ImagePrimitive,
  ImageWrapper,
  PriceWrapper,
  ProductAttributesWrapper,
  ProductLabel,
  ProductNameDekstop,
  ProductNamePhone,
  ProductNameWrapper,
  ProductPrice,
  ProductValue,
  QuantitiInput,
  QuantitiOrderButtonDekstopWrapper,
  Row,
  SelectMobileWrapper,
  SubtractionButton,
} from "./styles";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import Tooltip from "../Tooltip";
import SelectMobile from "../SelectMobile";

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
const options = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

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
  const truncateString = (str: string) => {
    if (str.length <= 30) return str;

    // Get the first 30 characters
    let truncated = str.substring(0, 30);

    // Find the last space to avoid cutting off a word
    let lastSpaceIndex = truncated.lastIndexOf(" ");

    // If there's a space, truncate at the last word
    if (lastSpaceIndex > -1) {
      truncated = truncated.substring(0, lastSpaceIndex);
    }

    return truncated;
  };

  const handleChangeSelect = (val: string | number) => {
    quantityOnChange(id, Number(val));
  };

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
          <ProductNameDekstop href={slug}>{name}</ProductNameDekstop>
          <ProductNamePhone href={slug}>
            {truncateString(name)}
          </ProductNamePhone>
          <DeleteButtonDekstop>
            <Tooltip text="Delete product">
              <UnstyledButton onClick={() => deleteProduct(id)}>
                <Icon id="trash2" color="#FF3333" size={20} strokeWidth={2} />
              </UnstyledButton>
            </Tooltip>
          </DeleteButtonDekstop>

          <DeleteButtonMobile>
            <Tooltip text="Delete product">
              <UnstyledButton onClick={() => deleteProduct(id)}>
                <Icon id="close" color="#000000" size={20} strokeWidth={2} />
              </UnstyledButton>
            </Tooltip>
          </DeleteButtonMobile>
        </ProductNameWrapper>
        <EntityWrapper>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
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
          </div>

          <SelectMobileWrapper>
            <SelectMobile
              label="Qty:"
              value={quantity}
              options={options}
              handleChange={handleChangeSelect}
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

          <QuantitiOrderButtonDekstopWrapper>
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
              disabled={quantity === 5 || quantity >= stockLeft}
              onClick={() => {
                quantityOnChange(id, quantity + 1);
              }}
            >
              <Icon
                id="plus"
                size={18}
                strokeWidth={1.5}
                color={
                  quantity === 5 || quantity >= stockLeft
                    ? "#898b8f"
                    : "#000000"
                }
              />
            </AdditionButton>
          </QuantitiOrderButtonDekstopWrapper>
        </BottomContent>
      </DetailWrapper>
    </Row>
  );
}

export default CartList;
