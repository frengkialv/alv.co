"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import { ChildrenProps } from "@/types/common";

export const Wrapper = ({ children }: ChildrenProps) => {
  return <WrapperStyle>{children}</WrapperStyle>;
};

export const HeaderWrapper = ({ children }: ChildrenProps) => {
  return <HeaderWrapperStyle>{children}</HeaderWrapperStyle>;
};

export const HeaderTitle = ({ children }: ChildrenProps) => {
  return <HeaderTitleStyle>{children}</HeaderTitleStyle>;
};

export const RatingContent = ({ children }: ChildrenProps) => {
  return <RatingContentStyle>{children}</RatingContentStyle>;
};

const WrapperStyle = styled.div`
  flex: 4;
`;

const HeaderWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitleStyle = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHT.bold};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${20 / 16}rem;
  }
`;

const RatingContentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
