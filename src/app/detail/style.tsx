"use client";
import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "@/type";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  --padding-horizontal: clamp(1rem, 14vw - 5rem, 6.25rem);
  display: flex;
  flex-direction: column;
  padding-right: var(--padding-horizontal);
  padding-left: var(--padding-horizontal);
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 2rem;
  }
`;
