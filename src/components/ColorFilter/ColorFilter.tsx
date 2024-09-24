"use client";
import React from "react";
import styled from "styled-components";
import { COLORS_FILTER } from "@/constants";
import { CategoryContext } from "../Provider/CategoryProvider";

function ColorFilter() {
  const { colorsFilter, setColorsFilter } = React.useContext(CategoryContext);

  const handleChangeSize = (val: string) => {
    if (colorsFilter.includes(val)) {
      const nextColorsSelected = colorsFilter.filter(
        (colorSelected) => colorSelected !== val
      );
      setColorsFilter(nextColorsSelected);
    } else {
      const nextColorsSelected = [...colorsFilter];
      nextColorsSelected.push(val);
      setColorsFilter(nextColorsSelected);
    }
  };

  return (
    <Wrapper>
      {COLORS_FILTER.map((color, index) => (
        <Row
          key={index}
          $color={color.color}
          $border={color.border}
          onClick={() => handleChangeSize(color.name)}
        >
          {colorsFilter.includes(color.name) && <>&#10004;</>}
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
  -webkit-tap-highlight-color: transparent;
`;

export default ColorFilter;
