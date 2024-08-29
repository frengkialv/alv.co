"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { ChildrenProps, Size } from "@/type";
import Image from "next/image";
import { QUERIES } from "@/constants";
import Rating from "../Rating";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";

interface PriceProps {
  children: React.ReactNode;
  color: string | undefined;
  lineDecoration: string | undefined;
}

export const ProductListWrapper = ({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) => {
  return (
    <ProductListWrapperStyle href={slug}>{children}</ProductListWrapperStyle>
  );
};

export const Price = ({ children, color, lineDecoration }: PriceProps) => {
  return (
    <PriceStyle style={{ color: color, textDecoration: lineDecoration }}>
      {children}
    </PriceStyle>
  );
};

export const RatingDuplicate = ({ rating }: { rating: number }) => {
  const { width } = React.useContext(MainWrapperContext);

  return (
    <Rating rating={rating} size={width > 675 ? Size.MEDIUM : Size.SMALL} />
  );
};

const ProductListWrapperStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-black);
`;

export const ImageWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.div`
  font-size: ${20 / 16}rem;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

export const RatingNumber = styled.span`
  font-size: ${14 / 16}rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PriceDiscount = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const PriceStyle = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const DiscountFlag = styled.span`
  font-size: ${12 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 16px;
  text-align: center;
  border-radius: 40px;
`;