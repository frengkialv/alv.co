"use client";
import styled from "styled-components";
import Link from "next/link";
import { QUERIES, WEIGHT } from "@/constants";
import Image from "next/image";

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

export const ImageWrapper = styled(Link)`
  flex: 1;
  position: relative;
  min-width: 125px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const DetailWrapper = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductNameDekstop = styled(Link)`
  display: revert;
  font-size: ${16 / 16}rem;
  font-weight: 600;
  color: var(--color-black);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 85%;
  line-height: 1.2;
  text-transform: capitalize;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
    font-size: ${14 / 16}rem;
  }
`;

export const ProductNamePhone = styled(Link)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    font-size: ${14 / 16}rem;
    font-weight: 600;
    color: var(--color-black);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 85%;
    line-height: 1.2;
    text-transform: capitalize;
  }
`;

export const EntityWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: baseline;
`;

export const ProductAttributesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
`;

export const ProductLabel = styled.span``;

export const ProductValue = styled.span`
  color: #666666;
  text-transform: capitalize;
`;

export const AlertStock = styled.span`
  font-size: ${12 / 16}rem;
  text-align: center;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: #fde4e4;
  color: #c03131;
  line-height: 1;
  margin-top: 4px;
  margin-left: 14px;
`;

export const SelectMobileWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    margin-top: 10px;
  }
`;

export const ProductPrice = styled.h5`
  font-size: ${15 / 16}rem;
  user-select: none;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const DiscountFlag = styled.span`
  font-size: ${12 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 14px;
  text-align: center;
  border-radius: 40px;
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 4px 12px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
