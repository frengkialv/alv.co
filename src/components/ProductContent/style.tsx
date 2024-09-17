"use client";
import React from "react";
import styled from "styled-components";
import Rating, { RatingSize } from "../Rating";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";
import { QUERIES, WEIGHT } from "@/constants";

export const RatingComponent = () => {
  const { width } = React.useContext(MainWrapperContext);
  return (
    <Rating
      rating={4.5}
      size={width > 1300 ? RatingSize.MEDIUM : RatingSize.SMALL}
    />
  );
};

export const Wrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;

  &:first-of-type {
    padding-top: 0;
  }

  &:not(&:last-of-type) {
    padding-bottom: 20px;
    border-bottom: 1px solid #dad8d8;
  }
`;

export const ProductBrand = styled.h1`
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHT.black};
  line-height: 1;
  text-transform: uppercase;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

export const ProductName = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
  line-height: 1;
  text-transform: capitalize;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PriceDiscount = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$ ";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const Price = styled.span<{
  $color: string | undefined;
  $lineDecoration: string | undefined;
}>`
  --color: ${(props) => props.$color};
  --line-decoration: ${(props) => props.$lineDecoration};

  font-size: ${18 / 16}rem;
  font-weight: 700;
  color: var(--color);
  text-decoration: var(--line-decoration);

  &::before {
    content: "$ ";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const DiscountFlag = styled.span`
  font-size: ${13 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 12px;
  text-align: center;
  border-radius: 40px;

  &::before {
    content: "-";
  }

  &::after {
    content: "%";
  }
`;

export const ProductDescription = styled.p`
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
  line-height: 1.4;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

export const RatingNumber = styled.span`
  font-size: ${15 / 16}rem;
`;

export const ProductCareTitle = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.bold};
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const ProductCareColumn = styled.div`
  display: flex;
`;

export const ProductCareIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 2;
`;

export const ProductCareIconTitle = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const ProductCareDescription = styled.span`
  flex: 3;
  font-size: ${14 / 16}rem;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
  text-transform: capitalize;
`;
