"use client";
import Image from "next/image";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";

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

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: ${28 / 16}rem;
  font-weight: ${WEIGHT.bold};
  line-height: 27px;
  white-space: nowrap;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${26 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${22 / 16}rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
`;

export const WrapperFilterSidebarTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const WrapperFilterSidebarMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;
