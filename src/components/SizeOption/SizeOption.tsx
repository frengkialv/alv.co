"use client";
import React from "react";
import styled from "styled-components";
import ErrorAlert from "../ErrorAlert";
import { QUERIES, SIZES_FILTER, SizesType, WEIGHT } from "@/constants";
import { DetailContext, useUpdateURL } from "../Provider/DetailProvider";
import { ProductsType } from "@/types/product";

interface Props {
  category: string;
  product: ProductsType;
}

function SizeOption({ category, product }: Props) {
  const {
    colorSelected,
    sizeSelected,
    setSizeSelected,
    stockLeft,
    setStockLeft,
  } = React.useContext(DetailContext);
  const updateURL = useUpdateURL();

  const [sizesOption, setSizesOption] = React.useState<SizesType[]>([]);

  const [availableSize, setAvailableSize] = React.useState<string[]>([]);

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [showErrorMessage, setShowErrorMessage] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const nextSizesOption = SIZES_FILTER.filter(
      (size) => size.category === category
    );

    setSizesOption(nextSizesOption);
  }, [category]);

  React.useEffect(() => {
    if (colorSelected) {
      setErrorMessage("");
      setShowErrorMessage(false);
      findAvailableSize();
    }
  }, [colorSelected]);

  const findAvailableSize = () => {
    const nextAvailableSizes: string[] = [];
    product.stock.forEach((stock) => {
      if (stock.color === colorSelected) {
        nextAvailableSizes.push(stock.size);
      }
    });

    setAvailableSize(nextAvailableSizes);
  };

  const sizeSelectedHandler = (val: string) => {
    if (!colorSelected) {
      setErrorMessage("Please select a color before choosing a size.");
      setShowErrorMessage(true);
      return;
    }

    const findStock = product.stock.filter(
      (stock) => stock.size === val && stock.color === colorSelected
    );

    setStockLeft(findStock[0].stock);
    updateURL("size", val);
    setSizeSelected(val);
  };

  return (
    <>
      <Title>Choose Size</Title>
      {showErrorMessage && <ErrorAlert message={errorMessage} />}
      <SizeWrapper>
        {sizesOption.map((size, index) => {
          const isDisable =
            !availableSize.includes(size.value) && colorSelected !== undefined;

          const isSelected =
            sizeSelected === size.value && availableSize.includes(sizeSelected);

          return (
            <SizeButton
              key={index}
              $selected={isSelected}
              disabled={isDisable}
              onClick={() => {
                if (size.value === sizeSelected) {
                  return;
                }
                sizeSelectedHandler(size.value);
              }}
            >
              {size.label}
            </SizeButton>
          );
        })}
      </SizeWrapper>
      <StockLeftAlert>
        {stockLeft !== undefined &&
          stockLeft !== 0 &&
          stockLeft <= 5 &&
          sizeSelected &&
          `Only ${stockLeft} piece${stockLeft > 1 ? "s" : ""} left`}
        &nbsp;
      </StockLeftAlert>
    </>
  );
}

const Title = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.bold};
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const StockLeftAlert = styled.span`
  font-size: ${14 / 16}rem;
  color: red;
  line-height: 1;
  margin-top: 4px;
`;

const SizeWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const SizeButton = styled.button<{ $selected: boolean; disabled: boolean }>`
  --background-color: ${(props) =>
    props.$selected ? "var(--color-black)" : "var(--color-snow-flake)"};
  --color: ${(props) =>
    props.$selected ? "var(--color-white)" : "var(--color-black)"};

  position: relative;
  overflow: hidden;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  line-height: 1.2;
  color: var(--color);
  padding: 8px 18px;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-radius: 60px;
  outline-offset: 4px;
  text-transform: capitalize;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: grey;
      transform: rotate(-35deg);
    }
  }
`;

export default SizeOption;
