import React from "react";
import Icon from "../Icon";
import ColorOption from "../ColorOption";
import SizeOption from "../SizeOption";
import AddToCartContent from "../AddToCartContent";
import MachineWashIcon from "../SVG/MachineWashIcon";
import {
  Column,
  DiscountFlag,
  Price,
  PriceDiscount,
  ProductBrand,
  ProductCareColumn,
  ProductCareDescription,
  ProductCareIconTitle,
  ProductCareIconWrapper,
  ProductCareTitle,
  ProductDescription,
  ProductName,
  ProductPrice,
  RatingComponent,
  RatingNumber,
  RatingWrapper,
  Wrapper,
} from "./style";
import { ProductsType } from "@/types/product";
import { formatDiscountPrice, formatPrice } from "@/utils";
import { ColorProduct, SizeProduct } from "@/types/stock";

interface Props {
  product: ProductsType;
  colors: ColorProduct[];
  colorSelected: ColorProduct | undefined;
  colorChangeHandler: (color: ColorProduct) => void;
  sizes: SizeProduct[];
  sizeSelected: SizeProduct | undefined;
  setSizeSelected: (size: SizeProduct) => void;
  stockLeft: number | null;
  amountOrder: number;
  setAmountOrder: (amount: number) => void;
  submitHandler: () => void;
}

function ProductContent({
  product,
  colors,
  colorSelected,
  colorChangeHandler,
  sizes,
  sizeSelected,
  setSizeSelected,
  stockLeft,
  amountOrder,
  setAmountOrder,
  submitHandler,
}: Props) {
  return (
    <Wrapper>
      <Column>
        <ProductBrand>{product.brand.name}</ProductBrand>
        <ProductName>{product.name}</ProductName>
        <RatingWrapper>
          <RatingComponent />
          <RatingNumber>4.5/5</RatingNumber>
        </RatingWrapper>
        <ProductPrice>
          {product.discountByPercent && (
            <PriceDiscount>
              {formatPrice(
                formatDiscountPrice(product.price, product.discountByPercent)
              )}
            </PriceDiscount>
          )}

          <Price
            $color={product.discountByPercent ? "#999999" : undefined}
            $lineDecoration={
              product.discountByPercent ? "line-through" : undefined
            }
          >
            {formatPrice(product.price)}
          </Price>

          <DiscountFlag>{product.discountByPercent}</DiscountFlag>
        </ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </Column>
      <Column>
        <ProductCareTitle>Material & Care</ProductCareTitle>
        <ProductCareColumn>
          <ProductCareIconWrapper>
            <Icon id="scissors" strokeWidth={1.5} size={20} />
            <ProductCareIconTitle>Material</ProductCareIconTitle>
          </ProductCareIconWrapper>
          <ProductCareDescription>{product.material}</ProductCareDescription>
        </ProductCareColumn>
        <ProductCareColumn>
          <ProductCareIconWrapper>
            <MachineWashIcon />
            <ProductCareIconTitle>Care Label</ProductCareIconTitle>
          </ProductCareIconWrapper>
          <ProductCareDescription>Machine washable</ProductCareDescription>
        </ProductCareColumn>
      </Column>
      <Column>
        <ColorOption
          colors={colors}
          colorSelected={colorSelected}
          setColorSelected={colorChangeHandler}
        />
      </Column>
      <Column>
        <SizeOption
          sizes={sizes}
          sizeSelected={sizeSelected}
          setSizeSelected={setSizeSelected}
          colorSelected={colorSelected}
          stockLeft={stockLeft}
        />
      </Column>
      <Column>
        <AddToCartContent
          amountOrder={amountOrder}
          setAmountOrder={setAmountOrder}
          stockLeft={stockLeft}
          submitHandler={submitHandler}
        />
      </Column>
    </Wrapper>
  );
}

export default ProductContent;
