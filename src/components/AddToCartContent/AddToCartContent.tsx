"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import { DetailContext } from "../Provider/DetailProvider";

function AddToCartContent() {
  const { amountOrder, setAmountOrder } = React.useContext(DetailContext);

  const handleSubtractAmount = () => {
    const nextAmount = amountOrder === 1 ? amountOrder : amountOrder - 1;
    setAmountOrder(nextAmount);
  };

  const handleAdditionalAmount = () => {
    const nextAmount = amountOrder + 1;
    setAmountOrder(nextAmount);
  };
  return (
    <OrderButtonWrapper>
      <QuantitiOrderButtonWrapper>
        <SubtractionButton onClick={handleSubtractAmount}>
          &#8722;
        </SubtractionButton>
        <QuantitiInput type="number" min="0" value={amountOrder} readOnly />
        <AdditionButton onClick={handleAdditionalAmount}>+</AdditionButton>
      </QuantitiOrderButtonWrapper>

      <AddCartButton>Add to Cart</AddCartButton>
    </OrderButtonWrapper>
  );
}

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

export default AddToCartContent;
