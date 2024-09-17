"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import { DetailContext } from "../Provider/DetailProvider";

interface Props {
  stockLeft: number | null;
  amountOrder: number;
  setAmountOrder: (amount: number) => void;
  submitHandler: () => void;
}

function AddToCartContent({
  amountOrder,
  setAmountOrder,
  stockLeft,
  submitHandler,
}: Props) {
  const handleSubtractAmount = () => {
    const nextAmount = amountOrder === 1 ? amountOrder : amountOrder - 1;
    setAmountOrder(nextAmount);
  };

  const handleAdditionalAmount = () => {
    if (amountOrder === stockLeft || amountOrder === 10) {
      return;
    }
    const nextAmount = amountOrder + 1;
    setAmountOrder(nextAmount);
  };
  return (
    <OrderButtonWrapper>
      <QuantitiOrderButtonWrapper $disabled={!stockLeft}>
        <SubtractionButton disabled={!stockLeft} onClick={handleSubtractAmount}>
          &#8722;
        </SubtractionButton>
        <QuantitiInput
          type="number"
          min="0"
          value={stockLeft === null ? 0 : amountOrder}
          readOnly
        />
        <AdditionButton disabled={!stockLeft} onClick={handleAdditionalAmount}>
          +
        </AdditionButton>
      </QuantitiOrderButtonWrapper>

      <AddCartButton disabled={!stockLeft} onClick={submitHandler}>
        Add to Cart
      </AddCartButton>
    </OrderButtonWrapper>
  );
}

const OrderButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const QuantitiOrderButtonWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`;

const SubtractionButton = styled.button<{ disabled: boolean }>`
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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

const AdditionButton = styled.button<{ disabled: boolean }>`
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const AddCartButton = styled.button<{ disabled: boolean }>`
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 60px;
  outline-offset: 4px;
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export default AddToCartContent;
