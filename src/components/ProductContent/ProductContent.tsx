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
import { StockType } from "@/types/stock";

interface Props {
  product: ProductsType;
}

function ProductContent({ product }: Props) {
  console.log("🚀 ~ ProductContent ~ product:", product);
  const [colors, setColors] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);

  const [colorSelected, setColorSelected] = React.useState<string>("");
  const [sizeSelected, setSizeSelected] = React.useState<string>("");

  const [stockLeft, setStockLeft] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (product) {
      colorsGrouping(product.stock);
    }
  }, [product]);

  React.useEffect(() => {
    if (sizeSelected) {
      let nextStockLeft = 0;
      product.stock.forEach((stock) => {
        if (stock.color === colorSelected && stock.size === sizeSelected) {
          nextStockLeft = stock.stock;
        }
      });

      setStockLeft(nextStockLeft);
    }
  }, [sizeSelected]);

  const colorsGrouping = (stocks: StockType[]) => {
    const nextColors: string[] = [];
    const nextSizes: string[] = [];

    stocks.forEach((stock) => {
      if (!nextColors.includes(stock.color)) {
        nextColors.push(stock.color);
      }
      if (!nextSizes.includes(stock.size)) {
        nextSizes.push(stock.size);
      }
    });
    setColors(nextColors);
    setSizes(nextSizes);
  };

  const colorChangeHandler = (color: string) => {
    setColorSelected(color);
    setSizeSelected("");
    setStockLeft(null);
    const nextSizes: string[] = [];

    product.stock.forEach((stock) => {
      if (!nextSizes.includes(stock.size) && stock.color === color) {
        nextSizes.push(stock.size);
      }
    });

    setSizes(nextSizes);
  };

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
        <AddToCartContent />
      </Column>
    </Wrapper>
  );
}

export default ProductContent;
