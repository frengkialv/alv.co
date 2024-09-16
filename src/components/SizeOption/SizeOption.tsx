"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import ErrorAlert from "../ErrorAlert";

interface Props {
  sizes: string[];
  sizeSelected: string;
  setSizeSelected: (val: string) => void;
  colorSelected: string;
  stockLeft: number | null;
}

const FIXED_SIZES = ["small", "medium", "large", "x-large"];

function SizeOption({
  sizes,
  sizeSelected,
  setSizeSelected,
  colorSelected,
  stockLeft,
}: Props) {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [showErrorMessage, setShowErrorMessage] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (colorSelected) {
      setErrorMessage("");
      setShowErrorMessage(false);
    }
  }, [colorSelected]);

  const sizeSelectedHandler = (val: string) => {
    if (!colorSelected) {
      setErrorMessage("Please select a color before choosing a size.");
      setShowErrorMessage(true);
      return;
    }

    setSizeSelected(val);
  };

  return (
    <>
      <Title>Choose Size</Title>
      {showErrorMessage && <ErrorAlert message={errorMessage} />}
      <SizeWrapper>
        {FIXED_SIZES.map((size) => {
          const isDisable = !sizes.includes(size);
          return (
            <SizeButton
              key={size}
              $selected={sizeSelected === size}
              disabled={isDisable}
              onClick={() => sizeSelectedHandler(size)}
            >
              {size}
            </SizeButton>
          );
        })}
      </SizeWrapper>
      <StockLeftAlert>
        {stockLeft &&
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

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const StockLeftAlert = styled.span`
  font-size: ${14 / 16}rem;
  color: red;
  line-height: 1;
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

  font-weight: ${WEIGHT.medium};
  color: var(--color);
  padding: 8px 20px;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-radius: 60px;
  outline-offset: 4px;
  text-transform: capitalize;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export default SizeOption;
