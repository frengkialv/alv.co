"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import { ChildrenProps } from "@/types/common";

export const HeaderWrapper = ({ children }: ChildrenProps) => {
  return <HeaderWrapperStyle>{children}</HeaderWrapperStyle>;
};

const HeaderWrapperStyle = styled.header`
  position: sticky;
  top: -44px;
  z-index: 1;

  @media ${QUERIES.phoneAndSmaller} {
    top: -42px;
  }
`;
