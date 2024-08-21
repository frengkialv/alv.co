import React from "react";
import styled from "styled-components";
import useWindowSize from "@/hooks/useWindowSize";
import { QUERIES, WEIGHT } from "@/constants";
import { Size } from "@/type";
import Rating from "../Rating";

function ProductContent() {
  const [selectedColor, setSelectedColor] = React.useState<string>("#4F4631");
  const [colors, setColors] = React.useState<string[]>([
    "#4F4631",
    "#314F4A",
    "#31344F",
  ]);
  const [selectedButton, setSelectedButton] = React.useState<string>();
  const [sizeOptions, setSizeOptions] = React.useState<string[]>([
    "Small",
    "Medium",
    "Large",
    "X-Large",
  ]);
  const [amountOrder, setAmountOrder] = React.useState<number>(1);

  const { width } = useWindowSize();

  return (
    <Wrapper>
      <Column>
        <ProductName>One Life Graphic T-shirt</ProductName>
        <RatingWrapper>
          {width && width > 1300 && <Rating rating={4.5} size={Size.LARGE} />}
          {width && width <= 1300 && <Rating rating={4.5} size={Size.MEDIUM} />}

          <RatingNumber>4.5/5</RatingNumber>
        </RatingWrapper>
        <ProductPrice>
          <PriceDiscount>260</PriceDiscount>

          <Price $color={"#999999"} $lineDecoration={"line-through"}>
            300
          </Price>

          <DiscountFlag>-40%</DiscountFlag>
        </ProductPrice>
        <ProductDescription>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </ProductDescription>
      </Column>
      <Column>
        <span style={{ color: "var(--color-gray-600)" }}>Select Colors</span>
        <ColorWrapper>
          {colors.map((color) => (
            <ButtonColor
              $color={color}
              key={color}
              onClick={() => setSelectedColor(color)}
            >
              {color === selectedColor && <>&#10004;</>}
            </ButtonColor>
          ))}
        </ColorWrapper>
      </Column>
      <Column>
        <span style={{ color: "var(--color-gray-600)" }}>Choose Size</span>
        <ColorWrapper>
          {sizeOptions.map((sizeOption) => (
            <SizeButton
              $selected={selectedButton === sizeOption}
              key={sizeOption}
              onClick={() => setSelectedButton(sizeOption)}
            >
              {sizeOption}
            </SizeButton>
          ))}
        </ColorWrapper>
      </Column>
      <Column>
        <OrderButtonWrapper>
          <QuantitiOrderButtonWrapper>
            <SubtractionButton
              onClick={() =>
                setAmountOrder((prevVal): number => {
                  if (prevVal === 1) {
                    return prevVal;
                  }
                  return prevVal - 1;
                })
              }
            >
              &#8722;
            </SubtractionButton>
            <QuantitiInput type="number" min="0" value={amountOrder} readOnly />
            <AdditionButton
              onClick={() => setAmountOrder((prevVal) => prevVal + 1)}
            >
              +
            </AdditionButton>
          </QuantitiOrderButtonWrapper>

          <AddCartButton>Add to Cart</AddCartButton>
        </OrderButtonWrapper>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;

  &:first-of-type {
    padding-top: 0;
  }

  &:not(&:last-of-type) {
    padding-bottom: 20px;
    border-bottom: 1px solid #dad8d8;
  }
`;

const ProductName = styled.h1`
  font-size: clamp(1.5rem, 9vw - 5rem, 2rem);
  font-weight: ${WEIGHT.black};
  line-height: 36px;
  text-transform: uppercase;
`;

const ProductPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PriceDiscount = styled.span`
  font-size: ${22 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Price = styled.span<{
  $color: string | undefined;
  $lineDecoration: string | undefined;
}>`
  --color: ${(props) => props.$color};
  --line-decoration: ${(props) => props.$lineDecoration};

  font-size: ${22 / 16}rem;
  font-weight: 700;
  color: var(--color);
  text-decoration: var(--line-decoration);

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const DiscountFlag = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 16px;
  text-align: center;
  border-radius: 40px;
`;

const ProductDescription = styled.p`
  color: var(--color-gray-600);
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

const RatingNumber = styled.span`
  font-size: ${16 / 16}rem;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const ButtonColor = styled.button<{ $color: string }>`
  --backgorund-color: ${(props) => props.$color};
  font-size: 20px;
  width: 35px;
  height: 35px;
  color: var(--color-white);
  background-color: var(--backgorund-color);
  border-radius: 50%;
  border: 1px solid transparent;
  outline-offset: 4px;
  user-select: none;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const SizeButton = styled.button<{ $selected: boolean }>`
  --background-color: ${(props) =>
    props.$selected ? "var(--color-black)" : "var(--color-snow-flake)"};
  --color: ${(props) =>
    props.$selected ? "var(--color-white)" : "var(--color-gray-600)"};

  color: var(--color);
  padding: 8px 20px;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const OrderButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const QuantitiOrderButtonWrapper = styled.div`
  display: flex;
`;

const SubtractionButton = styled.button`
  font-family: "Times New Roman", Times, serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 0;
  padding: 10px;
  padding-left: 20px;
  color: var(--color-black);
  border: none;
  border-top-left-radius: 60px 60px;
  border-bottom-left-radius: 60px;
  outline: none;
  cursor: pointer;
`;

const QuantitiInput = styled.input`
  font-weight: ${WEIGHT.medium};
  text-align: center;
  width: 60px;
  padding: 12px 0;
  color: var(--color-black);
  background-color: var(--color-snow-flake);
  border: none;
  outline: none;
  user-select: none;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }

  &:focus {
    border: none;
    outline: none;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const AdditionButton = styled.button`
  font-family: "Times New Roman", Times, serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 0;
  padding: 10px;
  padding-right: 20px;
  color: var(--color-black);
  border: none;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  outline: none;
  cursor: pointer;
`;

const AddCartButton = styled.button`
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export default ProductContent;
