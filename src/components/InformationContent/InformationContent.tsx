import { QUERIES, WEIGHT } from "@/constants";
import React from "react";
import styled from "styled-components";

function InformationContent() {
  return (
    <Wrapper>
      <LargeText>FIND CLOTHES THAT MATCHES YOUR STYLE</LargeText>
      <SmallText>
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </SmallText>
      <ShopButton>Shop Now</ShopButton>

      <AmountWrapperDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>200+</NumberAmount>
          <DescAmount>International Brands</DescAmount>
        </InternationalBrandAmountDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>2,000+</NumberAmount>
          <DescAmount>High-Quality Products</DescAmount>
        </InternationalBrandAmountDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>30,000+</NumberAmount>
          <DescAmount>Happy Customers</DescAmount>
        </InternationalBrandAmountDekstop>
      </AmountWrapperDekstop>

      <AmountWrapperMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>200+</NumberAmount>
          <DescAmount>International Brands</DescAmount>
        </InternationalBrandAmountMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>2,000+</NumberAmount>
          <DescAmount>High-Quality Products</DescAmount>
        </InternationalBrandAmountMobile>
      </AmountWrapperMobile>

      <AmountWrapperMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>30,000+</NumberAmount>
          <DescAmount>Happy Customers</DescAmount>
        </InternationalBrandAmountMobile>
      </AmountWrapperMobile>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 40px;
    padding-bottom: 0;
  }
`;

const LargeText = styled.h1`
  font-family: var(--integral-cf);
  font-size: clamp(3rem, 5vw - 0.25rem, 4rem);
  font-weight: ${WEIGHT["bold"]};
  line-height: clamp(3.5rem, 10vw - 4rem, 4.3rem);
`;

const SmallText = styled.p`
  color: var(--color-gray-600);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const ShopButton = styled.button`
  font-size: 1rem;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 15px 65px;
  margin-top: 14px;
  margin-bottom: 20px;
  width: fit-content;
  border-radius: 335px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const AmountWrapperDekstop = styled.div`
  display: flex;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const AmountWrapperMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const InternationalBrandAmountDekstop = styled.div`
  padding-left: 32px;
  padding-right: 32px;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

  &:not(&:last-of-type) {
    border-right: 2px solid var(--color-gray-200);
  }
`;

const InternationalBrandAmountMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    padding-left: 27.5px;
    padding-right: 27.5px;

    &:not(&:first-of-type) {
      border-left: 2px solid var(--color-gray-200);
    }
  }
`;

const NumberAmount = styled.span`
  display: block;
  font-size: clamp(1.4rem, 5vw - 1.5rem, 2.5rem);
  font-weight: ${WEIGHT["bold"]};
`;

const DescAmount = styled.span`
  color: var(--color-gray-400);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
`;

export default InformationContent;
