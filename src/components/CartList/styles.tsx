"use client";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";

export const Row = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 12px;

  &:not(&:first-child) {
    padding-top: 12px;
    border-top: 1px solid var(--color-gray-200);
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 125px;
`;

export const DetailWrapper = styled.div`
  flex: 1;
`;

export const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const ProductName = styled.h6`
  font-size: ${20 / 16}rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 85%;
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const ProductAttributesWrapper = styled.div`
  display: flex;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
`;

export const ProductLabel = styled.span``;

export const ProductValue = styled.span`
  color: #666666;
`;

export const ProductPrice = styled.h5`
  font-size: ${20 / 16}rem;
  margin-top: 4px;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;
