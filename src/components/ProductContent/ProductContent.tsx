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
import { ColorProduct } from "@/types/stock";

interface Props {
  product: ProductsType;
  category: string;
}

function ProductContent({ product, category }: Props) {
  const colors: ColorProduct[] = [];

  if (product) {
    product.stock.forEach((stock) => {
      if (!colors.includes(stock.color)) {
        colors.push(stock.color);
      }
    });
  }

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

          {product.discountByPercent && (
            <DiscountFlag>{product.discountByPercent}</DiscountFlag>
          )}
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
        <ColorOption colors={colors} />
      </Column>
      <Column>
        <SizeOption category={category} product={product} />
      </Column>
      <Column>
        <AddToCartContent productId={product.id} />
      </Column>
    </Wrapper>
  );
}

export default ProductContent;
