"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import { ChildrenProps } from "@/types/common";

function FilterSidebarWrapperDekstop({ children }: ChildrenProps) {
  return <Wrapper className="filter-wrapper">{children}</Wrapper>;
}

const Wrapper = styled.div`
  flex: 1;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  min-width: 280px;
  height: fit-content;
  padding: 20px 24px;
  border: 1px solid var(--color-gray-100);
  border-radius: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default FilterSidebarWrapperDekstop;
