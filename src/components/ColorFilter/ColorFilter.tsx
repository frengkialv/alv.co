"use client";
import React from "react";
import styled from "styled-components";
import { COLORSFILTER } from "@/constants";

function ColorFilter() {
  const [colorSelected, setcolorSelected] = React.useState<string>(
    COLORSFILTER[0].color
  );

  return (
    <Wrapper>
      {COLORSFILTER.map((color, index) => (
        <Row
          key={index}
          $color={color.color}
          $border={color.border}
          onClick={() => setcolorSelected(color.color)}
        >
          {colorSelected === color.color && <>&#10004;</>}
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
