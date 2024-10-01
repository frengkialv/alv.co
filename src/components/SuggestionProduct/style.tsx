"use client";
import React from "react";
import styled from "styled-components";
import Spacer from "@/components/Spacer";
import { QUERIES } from "@/constants";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";

export const SpacerNewArrival = () => {
  const { width } = React.useContext(MainWrapperContext);

  return (
    <>
      {width !== undefined && width > 675 && <Spacer size={50} />}
      {width !== undefined && width <= 675 && <Spacer size={40} />}
    </>
  );
};

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

export const Dash = styled.div`
  border-bottom: 1px solid #dad8d8;
`;
