"use client";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import DialogMenuCenter from "../DialogMenuCenter";
import { WEIGHT } from "@/constants";

type Options = {
  label: number;
  value: number;
};

interface Props {
  label?: string;
  value: number;
  stockLeft: number;
  handleChange: (val: number) => void;
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

function SelectQTYMobile({ label, value, stockLeft, handleChange }: Props) {
  const [show, setShow] = React.useState<boolean>(false);

  const handleChangeQuantity = (val: number) => {
    if (val === value) return;

    handleChange(val);

    setShow(false);
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
          handleChange={handleChangeQuantity}
        />
      </DialogMenuCenter>
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
