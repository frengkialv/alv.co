"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { WEIGHT } from "@/constants";
import { updateQuantityCart } from "@/services/cart.service";
import Icon from "../Icon";
import DialogMenuCenter from "../DialogMenuCenter";
import LoadingComponent from "../LaodingComponent";

type Options = {
  label: number;
  value: number;
};

interface Props {
  id: string;
  label: string;
  value: number;
  stockLeft: number;
}

const options: Options[] = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

function SelectQTYMobile({ id, label, value, stockLeft }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);

  const quantityChangeHandler = async (quantity: number) => {
    try {
      if (quantity === value) return;
      setIsLoading(true);
      await updateQuantityCart(id, quantity);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      setShow(false);
      router.refresh();
      setTimeout(async () => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <Select onClick={() => setShow(true)}>
        {label && label} {value}{" "}
        <Icon id="chevron-down" size={18} strokeWidth={1.5} color="#666666" />
      </Select>

      <DialogMenuCenter title="Quantity" open={show} onOpenChange={setShow}>
        <FilterQuantity
          qtySelected={value}
          stockLeft={stockLeft}
          handleChange={quantityChangeHandler}
        />
      </DialogMenuCenter>
      <LoadingComponent isLoading={isLoading} />
    </>
  );
}

function FilterQuantity({
  qtySelected,
  stockLeft,
  handleChange,
}: {
  qtySelected: number;
  stockLeft: number;
  handleChange: (val: number) => void;
}) {
  let arrOptions: Options[] = options;

  if (stockLeft < 5) {
    arrOptions = options.slice(0, stockLeft);
  }

  return (
    <RadioButtonContainer>
      {arrOptions.map((option) => (
        <RadioButtonWrapper
          key={option.value}
          onClick={() => handleChange(option.value)}
        >
          <Label htmlFor={`${option.value}-option`}>{option.label}</Label>
          <input
            type="radio"
            id={`${option.value}-option`}
            value={option.value}
            checked={qtySelected === option.value}
            onChange={() => handleChange(option.value)}
          />
        </RadioButtonWrapper>
      ))}
    </RadioButtonContainer>
  );
}

const Select = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${14 / 16}rem;
  line-height: 1;
  border: 1.5px solid #dedede;
  color: #666666;
  border-radius: 8px;
  padding: 2px 6px;
  background-color: transparent;
  outline: none;
`;

const RadioButtonContainer = styled.div`
  padding: 25px;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-top: 1px solid var(--color-gray-200);

  &:first-of-type {
    padding-top: 0;
    border-top: none;
  }
`;

const Label = styled.label`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
`;

export default SelectQTYMobile;
