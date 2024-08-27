"use client";
import React from "react";
import styled from "styled-components";
import { DetailContext } from "../Provider/DetailProvider";
import { QUERIES, WEIGHT } from "@/constants";

function SizeOption() {
  const { selectedSize, setSelectedSize, sizeOptions } =
    React.useContext(DetailContext);
  return (
    <>
      <Title>Choose Size</Title>
      <SizeWrapper>
        {sizeOptions.map((sizeOption) => (
          <SizeButton
            $selected={selectedSize === sizeOption}
            key={sizeOption}
            onClick={() => setSelectedSize(sizeOption)}
          >
            {sizeOption}
          </SizeButton>
        ))}
      </SizeWrapper>
    </>
  );
}

const Title = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.bold};
`;

const SizeWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const SizeButton = styled.button<{ $selected: boolean }>`
  --background-color: ${(props) =>
    props.$selected ? "var(--color-black)" : "var(--color-snow-flake)"};
  --color: ${(props) =>
    props.$selected ? "var(--color-white)" : "var(--color-gray-600)"};

  color: var(--color);
  padding: 8px 20px;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export default SizeOption;
