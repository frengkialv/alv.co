"use client";
import React from "react";
import Icon from "@/components/Icon";
import styled from "styled-components";
import LoadingComponent from "@/components/LaodingComponent";
import { useRouter } from "next/navigation";
import { updateQuantityCart } from "@/services/cart.service";
import { QUERIES, WEIGHT } from "@/constants";

interface Props {
  id: string;
  quantity: number;
  stockLeft: number;
}

function QuantityOrderButtonDesktop({ id, quantity, stockLeft }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const quantityChangeHandler = async (id: string, quantity: number) => {
    try {
      setIsLoading(true);
      await updateQuantityCart(id, quantity);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      router.refresh();
      setTimeout(async () => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <QuantitiOrderButtonDekstopWrapper>
      <SubtractionButton
        onClick={() => {
          if (quantity === 1) {
            return;
          }
          quantityChangeHandler(id, quantity - 1);
        }}
      >
        <Icon
          id="minus"
          size={18}
          strokeWidth={1.5}
          color={quantity === 1 ? "#898b8f" : "#000000"}
        />
      </SubtractionButton>
      <QuantitiInput type="number" min="0" max="10" value={quantity} readOnly />
      <AdditionButton
        disabled={quantity === 5 || quantity >= stockLeft}
        onClick={() => {
          quantityChangeHandler(id, quantity + 1);
        }}
      >
        <Icon
          id="plus"
          size={18}
          strokeWidth={1.5}
          color={
            quantity === 5 || quantity >= stockLeft ? "#898b8f" : "#000000"
          }
        />
      </AdditionButton>

      <LoadingComponent isLoading={isLoading} />
    </QuantitiOrderButtonDekstopWrapper>
  );
}

const QuantitiOrderButtonDekstopWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #bfc9d9;
  border-radius: 60px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const SubtractionButton = styled.button`
  padding: 10px;
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
  padding: 8px 0;
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
    width: 15px;
    font-size: ${12 / 16}rem;
  }
`;

const AdditionButton = styled.button`
  padding: 10px;
  padding-right: 14px;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default QuantityOrderButtonDesktop;
