"use client";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import LoadingComponent from "../LaodingComponent/LaodingComponent";
import { QUERIES, WEIGHT } from "@/constants";
import { DetailContext } from "../Provider/DetailProvider";

interface Props {
  productId: string;
}

function AddToCartContent({ productId }: Props) {
  const { stockLeft, amountOrder, setAmountOrder, submitHandler, isLoading } =
    React.useContext(DetailContext);

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
        <SubtractionButton
          disabled={!stockLeft || amountOrder === 1}
          onClick={handleSubtractAmount}
        >
          <Icon
            id="minus"
            size={18}
            strokeWidth={1.5}
            color={amountOrder === 1 ? "#898b8f" : "#000000"}
          />
        </SubtractionButton>
        <QuantitiInput
          type="number"
          min="0"
          value={stockLeft === null ? 0 : amountOrder}
          readOnly
        />
        <AdditionButton
          disabled={
            !stockLeft || amountOrder === 5 || amountOrder >= stockLeft!
          }
          onClick={handleAdditionalAmount}
        >
          <Icon
            id="plus"
            size={18}
            strokeWidth={1.5}
            color={
              amountOrder === 5 || amountOrder >= stockLeft!
                ? "#898b8f"
                : "#000000"
            }
          />
        </AdditionButton>
      </QuantitiOrderButtonWrapper>

      <AddCartButton
        disabled={!stockLeft}
        onClick={() => submitHandler(productId)}
      >
        Add to Cart
      </AddCartButton>

      <LoadingComponent isLoading={isLoading} />
    </OrderButtonWrapper>
  );
}

const OrderButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const QuantitiOrderButtonWrapper = styled.div<{ $disabled?: boolean }>`
  display: flex;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  align-items: center;
  border: 2px solid #bfc9d9;
  border-radius: 60px;
  min-width: fit-content;

  &:hover {
    outline: 2px solid var(--color-black);
    outline-offset: 4px;
  }
`;

const SubtractionButton = styled.button`
  padding: 8px 10px;
  padding-left: 14px;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const QuantitiInput = styled.input`
  font-weight: ${WEIGHT.medium};
  text-align: center;
  font-size: ${14 / 16}rem;
  width: 30px;
  padding: 4px 0;
  color: var(--color-black);
  background-color: transparent;
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
  padding: 8px 10px;
  padding-right: 14px;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const AddCartButton = styled.button<{ disabled?: boolean }>`
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
