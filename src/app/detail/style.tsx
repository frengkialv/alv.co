"use client";
import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "@/type";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 2rem;
  }
`;
