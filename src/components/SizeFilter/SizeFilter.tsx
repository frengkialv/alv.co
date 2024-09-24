"use client";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { SIZES_FILTER } from "@/constants";
import { CategoryContext } from "../Provider/CategoryProvider";

interface Sizes {
  value: string;
  label: string;
  category: string;
}

function SizeFilter() {
  const { currentPath, sizesFilter, setSizesFilter } =
    React.useContext(CategoryContext);

  const [sizes, setSizes] = React.useState<Sizes[]>([]);

  React.useEffect(() => {
    const nextSizes = SIZES_FILTER.filter(
      (size) => size.category === currentPath
    );

    setSizes(nextSizes);
  }, [currentPath]);

  const handleChangeSize = (val: string) => {
    if (sizesFilter.includes(val)) {
      const nextSizeSelected = sizesFilter.filter(
        (sizeSelected) => sizeSelected !== val
      );
      setSizesFilter(nextSizeSelected);
    } else {
      const nextSizeSelected = [...sizesFilter];
      nextSizeSelected.push(val);
      setSizesFilter(nextSizeSelected);
    }
  };

  return (
    <Wrapper>
      {sizes.map((size) => (
        <Button
          key={size.value}
          size="small"
          variant={sizesFilter.includes(size.value) ? "primary" : "secondary"}
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
