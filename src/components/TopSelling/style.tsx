"use client";
import React from "react";
import styled from "styled-components";
import Spacer from "@/components/Spacer";
import { QUERIES, WEIGHT } from "@/constants";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";

export const SpacerTopSelling = () => {
  const { width } = React.useContext(MainWrapperContext);

  return (
    <>
      {width !== undefined && width > 675 && <Spacer size={50} />}
      {width !== undefined && width <= 675 && <Spacer size={40} />}
    </>
  );
};

export const Wrapper = styled.div`
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
`;

export const HeaderTitle = styled.h1`
  font-family: var(--integral-cf);
  font-size: ${38 / 16}rem;
  line-height: 45px;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${26 / 16}rem;
    line-height: 35px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${22 / 16}rem;
    line-height: 35px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-weight: ${WEIGHT.medium};
  padding: 15px 80px;
  background-color: transparent;
  border: 1px solid #dad8d8;
  border-radius: 60px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    width: 100%;
    padding-top: 13.5px;
    padding-bottom: 13.5px;
  }
`;

export const Dash = styled.div`
  border-bottom: 1px solid #dad8d8;
`;
