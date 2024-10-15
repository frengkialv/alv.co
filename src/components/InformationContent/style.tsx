"use client";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import { ChildrenProps } from "@/types/common";
import { useRouter } from "next/navigation";

export const ShopButton = ({ children }: ChildrenProps) => {
  const router = useRouter();

  return (
    <ShopButtonStyle onClick={() => router.push("/on-sale")}>
      {children}
    </ShopButtonStyle>
  );
};

export const Wrapper = styled.div`
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

export const LargeText = styled.h1`
  font-family: var(--integral-cf);
  font-size: clamp(3rem, 5vw - 0.25rem, 4rem);
  font-weight: ${WEIGHT["bold"]};
  line-height: clamp(3.5rem, 10vw - 4rem, 4.3rem);
`;

export const SmallText = styled.p`
  color: var(--color-gray-600);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const ShopButtonStyle = styled.button`
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

export const AmountWrapperDekstop = styled.div`
  display: flex;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const AmountWrapperMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const InternationalBrandAmountDekstop = styled.div`
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

export const InternationalBrandAmountMobile = styled.div`
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

export const NumberAmount = styled.span`
  display: block;
  font-size: clamp(1.4rem, 5vw - 1.5rem, 2.5rem);
  font-weight: ${WEIGHT["bold"]};
`;

export const DescAmount = styled.span`
  color: var(--color-gray-400);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
`;
