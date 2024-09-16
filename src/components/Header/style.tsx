"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import { HeaderContext } from "@/components/Provider/HeaderProvider";
import { ChildrenProps } from "@/types/common";

export const HeaderWrapper = ({ children }: ChildrenProps) => {
  const { showSuperHeader } = React.useContext(HeaderContext);

  return (
    <HeaderWrapperStyle $superHeader={showSuperHeader}>
      {children}
    </HeaderWrapperStyle>
  );
};

const HeaderWrapperStyle = styled.header<{ $superHeader: boolean }>`
  --top: ${(props) => (props.$superHeader ? -44 + "px" : 0)};
  position: sticky;
  top: var(--top);
  z-index: 1;

  @media ${QUERIES.phoneAndSmaller} {
    --top: ${(props) => (props.$superHeader ? -42 + "px" : 0)};
    top: var(--top);
  }
`;
