"use client";
import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";
import { QUERIES, WEIGHT } from "@/constants";
import { MainWrapperContext } from "@/components/Provider/MainWrapperProvider";

export function PromoIcon() {
  const { width } = React.useContext(MainWrapperContext);

  return (
    <PropIconStyle>
      {width > 675 && (
        <Icon id="tag" color="var(--color-gray-400)" strokeWidth={2} />
      )}
      {width <= 675 && (
        <Icon
          id="tag"
          color="var(--color-gray-400)"
          strokeWidth={2}
          size={19}
        />
      )}
    </PropIconStyle>
  );
}

export const Wrapper = styled.div`
  padding-left: var(--padding-horizontal-wrapper);
  padding-right: var(--padding-horizontal-wrapper);
`;

export const MainTitle = styled.h1`
  font-family: var(--integral-cf);
  font-size: ${36 / 16}rem;
  line-height: 1;
  margin-top: 8px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${28 / 16}rem;
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 16px;
  }
`;

export const SummaryWrapper = styled.div`
  flex: 5;
`;

export const InnerWrapper = styled.div`
  height: fit-content;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid var(--color-gray-200);
  position: sticky;
  top: 90px;
`;

export const SummaryTitle = styled.h5`
  font-size: ${24 / 16}rem;
  line-height: 1;
  margin-bottom: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${20 / 16}rem;
  }
`;

export const RowSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

export const Label = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-500);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const Value = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const DiscountValue = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: 700;
  color: var(--color-red);

  &::before {
    content: "-$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const TotalSummary = styled.span`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

export const TotalLabel = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHT.medium};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const TotalValue = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export const PromoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 20px 0 25px 0;
`;

export const InputPromoWrapper = styled.div`
  flex: 5;
  position: relative;
`;

export const InputWrapper = styled.input`
  background-color: var(--color-snow-flake);
  padding: 12px 10px 12px 55px;
  border: none;
  border-radius: 60px;
  width: 100%;
  outline-offset: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    padding: 10px 10px 10px 50px;
  }
`;

export const PropIconStyle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
`;

export const ApplyButtonWrapper = styled.div`
  flex: 2;
`;
