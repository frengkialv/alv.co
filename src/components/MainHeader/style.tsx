"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: var(--color-white-blur);
  backdrop-filter: blur(4px);
  padding: 20px clamp(1rem, 14vw - 5rem, 6.25rem);

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

export const LogoWrapper = styled.div`
  --font-size: ${32 / 16}rem;
  margin-top: 5px;

  @media ${QUERIES.phoneAndSmaller} {
    --font-size: ${28 / 16}rem;
  }
`;

export const WrapperSearchInput = styled.div`
  flex: 1;
  min-width: 250px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
