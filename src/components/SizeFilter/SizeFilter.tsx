"use client";
import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
];

function SizeFilter() {
  const [sizesSelected, setSizesSelected] = React.useState<string[]>([]);

  const handleChangeSize = (val: string) => {
    if (sizesSelected.includes(val)) {
      const nextSizeSelected = sizesSelected.filter(
        (sizeSelected) => sizeSelected !== val
      );
      setSizesSelected(nextSizeSelected);
    } else {
      const nextSizeSelected = [...sizesSelected];
      nextSizeSelected.push(val);
      setSizesSelected(nextSizeSelected);
    }
  };

  return (
    <Wrapper>
      {Sizes.map((size) => (
        <Button
          key={size}
          size="small"
          variant={sizesSelected.includes(size) ? "primary" : "secondary"}
          onClick={() => handleChangeSize(size)}
        >
          {size}
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
