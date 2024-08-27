"use client";
import React from "react";
import styled from "styled-components";
import { DetailContext } from "../Provider/DetailProvider";
import { QUERIES, WEIGHT } from "@/constants";

function ColorOption() {
  const { selectedColor, setSelectedColor, colors } =
    React.useContext(DetailContext);

  return (
    <>
      <Title>Select Colors</Title>
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
    </>
  );
}

const Title = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.bold};
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

export default ColorOption;
