"use client";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { SIZES_FILTER } from "@/constants";

interface Props {
  value: string[];
  onValueChange: (val: string[]) => void;
}

function SizeFilter({ value, onValueChange }: Props) {
  const handleChangeSize = (val: string) => {
    if (value.includes(val)) {
      const nextSizeSelected = value.filter(
        (sizeSelected) => sizeSelected !== val
      );

      onValueChange(nextSizeSelected);
    } else {
      const nextSizeSelected = [...value];
      nextSizeSelected.push(val);

      onValueChange(nextSizeSelected);
    }
  };

  return (
    <Wrapper>
      {SIZES_FILTER.map((size) => (
        <Button
          key={size.value}
          size="small"
          variant={value.includes(size.value) ? "primary" : "secondary"}
          onClick={() => handleChangeSize(size.value)}
        >
          {size.label}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export default SizeFilter;
