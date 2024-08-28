"use client";
import React from "react";
import styled from "styled-components";
import { COLORSFILTER } from "@/constants";

function ColorFilter() {
  const [colorsSelected, setcolorsSelected] = React.useState<string[]>([]);

  const handleChangeSize = (val: string) => {
    if (colorsSelected.includes(val)) {
      const nextSizeSelected = colorsSelected.filter(
        (sizeSelected) => sizeSelected !== val
      );
      setcolorsSelected(nextSizeSelected);
    } else {
      const nextSizeSelected = [...colorsSelected];
      nextSizeSelected.push(val);
      setcolorsSelected(nextSizeSelected);
    }
  };
  return (
    <Wrapper>
      {COLORSFILTER.map((color, index) => (
        <Row
          key={index}
          $color={color.color}
          $border={color.border}
          onClick={() => handleChangeSize(color.color)}
        >
          {colorsSelected.includes(color.color) && <>&#10004;</>}
        </Row>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const Row = styled.div<{ $color: string; $border: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 16}rem;
  font-weight: 500;
  color: ${(props) =>
    props.$color === "#FFFFFF" ? "var(--color-black)" : "var(--color-white)"};
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.$color};
  border: 1.5px solid ${(props) => props.$border};
  border-radius: 50%;
  cursor: pointer;
`;

export default ColorFilter;
