"use client";
import { WEIGHT } from "@/constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: ${28 / 16}rem;
  font-weight: ${WEIGHT.bold};
  line-height: 27px;
`;
