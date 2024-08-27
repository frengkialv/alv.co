"use client";
import React from "react";
import styled from "styled-components";
import SortIcon from "../SVG/SortIcon";
import Tooltip from "../Tooltip";
import { DetailContext } from "../Provider/DetailProvider";
import { QUERIES, WEIGHT } from "@/constants";

function SortButton() {
  const { setShowSortDialogMenu } = React.useContext(DetailContext);

  return (
    <Tooltip text="Sort">
      <SortButtonStyle onClick={() => setShowSortDialogMenu(true)}>
        <SortIcon />
      </SortButtonStyle>
    </Tooltip>
  );
}

const SortButtonStyle = styled.button`
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

export default SortButton;
