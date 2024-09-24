"use client";
import styled from "styled-components";
import Link from "next/link";
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
  justify-content: space-between;
  gap: 4px;
  height: auto;
`;

export const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled(Link)`
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
    font-size: ${14 / 16}rem;
  }
`;

export const EntityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProductAttributesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
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

export const ProductPrice = styled.h5`
  font-size: ${15 / 16}rem;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${13 / 16}rem;
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

  @media ${QUERIES.phoneAndSmaller} {
    padding: 4px 12px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantitiOrderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #bfc9d9;
  border-radius: 60px;

  &:hover {
    border-color: var(--color-black);
  }
`;

export const SubtractionButton = styled.button`
  padding: 10px;
  padding-left: 14px;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const QuantitiInput = styled.input`
  font-weight: ${WEIGHT.medium};
  text-align: center;
  font-size: ${14 / 16}rem;
  width: 30px;
  padding: 8px 0;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  user-select: none;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }

  &:focus {
    border: none;
    outline: none;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 15px;
    font-size: ${12 / 16}rem;
  }
`;

export const AdditionButton = styled.button`
  padding: 10px;
  padding-right: 14px;
  color: var(--color-black);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
