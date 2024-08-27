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

export const ImageWrapper = ({ children }: ChildrenProps) => {
  return <ImageWrapperStyle>{children}</ImageWrapperStyle>;
};

export const ImageProduct = ({ src, ...delegated }: { src: string }) => {
  return <ImageProductStyle src={src} alt="" {...delegated} />;
};

export const Row = ({ children }: ChildrenProps) => {
  return <RowStyle>{children}</RowStyle>;
};

export const Name = ({ children }: ChildrenProps) => {
  return <NameStyle>{children}</NameStyle>;
};

export const RatingWrapper = ({ children }: ChildrenProps) => {
  return <RatingWrapperStyle>{children}</RatingWrapperStyle>;
};

export const RatingNumber = ({ children }: ChildrenProps) => {
  return <RatingNumberStyle>{children}</RatingNumberStyle>;
};

export const PriceWrapper = ({ children }: ChildrenProps) => {
  return <PriceWrapperStyle>{children}</PriceWrapperStyle>;
};

export const PriceDiscount = ({ children }: ChildrenProps) => {
  return <PriceDiscountStyle>{children}</PriceDiscountStyle>;
};

export const Price = ({ children, color, lineDecoration }: PriceProps) => {
  return (
    <PriceStyle style={{ color: color, textDecoration: lineDecoration }}>
      {children}
    </PriceStyle>
  );
};

export const DiscountFlag = ({ children }: ChildrenProps) => {
  return <DiscountFlagStyle>{children}</DiscountFlagStyle>;
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

const ImageWrapperStyle = styled.div`
  margin-bottom: 16px;
`;

const ImageProductStyle = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RowStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NameStyle = styled.p`
  font-size: ${20 / 16}rem;
  font-weight: 700;
  width: 285px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${QUERIES.phoneAndSmaller} {
    width: 200px;
    font-size: ${16 / 16}rem;
  }
`;

const RatingWrapperStyle = styled.div`
  display: flex;
  gap: 13px;
`;

const RatingNumberStyle = styled.span`
  font-size: ${14 / 16}rem;
`;

const PriceWrapperStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PriceDiscountStyle = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const PriceStyle = styled.span//   $lineDecoration: string | undefined; //   $color: string | undefined; // <{
// }>`
//   --color: ${(props) => props.$color};
//   --line-decoration: ${(props) => props.$lineDecoration};
`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const DiscountFlagStyle = styled.span`
  font-size: ${12 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 16px;
  text-align: center;
  border-radius: 40px;
`;
