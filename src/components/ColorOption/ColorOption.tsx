"use client";
import React from "react";
import styled from "styled-components";
import { COLORS_OPTION, QUERIES, WEIGHT } from "@/constants";
import { ColorProduct } from "@/types/stock";

interface Props {
  colors: ColorProduct[];
  colorSelected: ColorProduct | undefined;
  setColorSelected: (val: ColorProduct) => void;
}

function ColorOption({ colors, colorSelected, setColorSelected }: Props) {
  return (
    <>
      <Title>Select Colors</Title>
      <ColorWrapper>
        {colors.map((color) => (
          <ButtonColor
            key={color}
            $color={COLORS_OPTION[color].color}
            $border={COLORS_OPTION[color].border}
            disabled={color === colorSelected}
            onClick={() => setColorSelected(color)}
          >
            {color === colorSelected && <>&#10004;</>}
          </ButtonColor>
        ))}
      </ColorWrapper>
    </>
  );
}

const Title = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.bold};
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const ButtonColor = styled.button<{ $color: string; $border: string }>`
  --backgorund-color: ${(props) => props.$color};
  --border: ${(props) => props.$border};
  font-size: 20px;
  width: 35px;
  height: 35px;
  color: ${(props) =>
    props.$color === "#FFFFFF" ? "var(--color-black)" : "var(--color-white)"};
  background-color: var(--backgorund-color);
  border-radius: 50%;
  border: 1px solid var(--border);
  outline-offset: 4px;
  user-select: none;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export default ColorOption;
