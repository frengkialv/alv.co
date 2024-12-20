"use client";
import React from "react";
import styled from "styled-components";
import CheckmarkIcon from "../SVG/CheckmarkIcon";
import { COLORS_OPTION, QUERIES, WEIGHT } from "@/constants";
import { ColorProduct } from "@/types/stock";
import { DetailContext, useUpdateURL } from "../Provider/DetailProvider";

interface Props {
  colors: ColorProduct[];
}

function ColorOption({ colors }: Props) {
  const { colorSelected, setColorSelected, setSizeSelected, setStockLeft } =
    React.useContext(DetailContext);

  const updateURL = useUpdateURL();

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
            onClick={() => {
              setStockLeft(0);
              setSizeSelected("");
              setColorSelected(color);
              updateURL("color", color);
            }}
          >
            {color === colorSelected && (
              <CheckmarkIcon color={color === "white" ? "black" : "white"} />
            )}
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

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 35px;
  height: 35px;
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
