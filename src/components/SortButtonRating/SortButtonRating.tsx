"use client";
import React from "react";
import styled from "styled-components";
import Tooltip from "../Tooltip";
import AscendingLogo from "../SVG/AscendingLogo";
import DescendingLogo from "../SVG/DescendingLogo";
import { DetailContext } from "../Provider/DetailProvider";
import { QUERIES, SortRating, WEIGHT } from "@/constants";

function SortButtonRating() {
  const { sortRating, setSortRating } = React.useContext(DetailContext);

  return (
    <Tooltip text="Sort">
      <SortButtonRatingStyle
        onClick={() => {
          const nextSort =
            sortRating === SortRating.ASCENDING
              ? SortRating.DESCENDING
              : SortRating.ASCENDING;
          setSortRating(nextSort);
        }}
      >
        {sortRating === SortRating.ASCENDING && <AscendingLogo />}
        {sortRating === SortRating.DESCENDING && <DescendingLogo />}
      </SortButtonRatingStyle>
    </Tooltip>
  );
}

const SortButtonRatingStyle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-weight: ${WEIGHT.medium};
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px 16px;
  border: none;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 10px 20px;
  }
`;

export default SortButtonRating;
