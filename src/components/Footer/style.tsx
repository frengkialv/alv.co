"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { FooterContext } from "../Provider/FooterProvider";
import { QUERIES, WEIGHT } from "@/constants";
import { ChildrenProps } from "@/types/common";

export const Wrapper = ({ children }: ChildrenProps) => {
  const { subscriberWrapperHeight } = useContext(FooterContext);
  return (
    <WrapperStyle $subscriberHeight={subscriberWrapperHeight}>
      {children}
    </WrapperStyle>
  );
};

export const Filler = () => {
  return <FillerStyle />;
};

export const SubscribeInput = () => {
  return (
    <>
      <SubscribeInputStyle
        placeholder="Enter your email address"
        type="email"
      />

      <IconEmailDekstopStyle
        id="email"
        strokeWidth={3}
        color="#999999"
        size={20}
      />

      <IconEmailTabletStyle
        id="email"
        strokeWidth={2}
        color="#999999"
        size={16}
      />
    </>
  );
};

const WrapperStyle = styled.div<{ $subscriberHeight: number }>`
  --top: ${(props) => "-" + props.$subscriberHeight / 2 + "px"};
  --padding-top: ${(props) =>
    props.$subscriberHeight
      ? props.$subscriberHeight / 2 + 40 + "px"
      : "190px"};
  position: relative;
  padding-top: var(--padding-top);
  padding-bottom: 40px;
  padding-left: var(--padding-horizontal-wrapper);
  padding-right: var(--padding-horizontal-wrapper);
  margin-top: ${(props) => props.$subscriberHeight / 2 + 50 + "px"};
  background-color: var(--color-gray-900);
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: var(--top);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 36px 64px;
  width: calc(100% - (var(--padding-horizontal-wrapper) * 2));
  background-color: var(--color-black);
  border-radius: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 26px clamp(1rem, 12vw - 3.75rem, 4rem);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 32px 24px;
    flex-direction: column;
    gap: 18px;
  }
`;

export const SubscribeText = styled.h1`
  flex: 2;
  font-family: var(--integral-cf);
  font-size: ${40 / 16}rem;
  line-height: 43px;
  color: var(--color-white);

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${30 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

const FillerStyle = styled.div`
  flex: 1;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const SubscribeInputStyle = styled.input`
  width: 100%;
  padding: 12px 30px 12px 50px;
  border-radius: 62px;
  outline-offset: 4px;
  border: 1px solid transparent;

  &::placeholder {
    color: #999999;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${14 / 16}rem;
    padding: 8px 25px 10px 45px;
  }
`;

const IconEmailDekstopStyle = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: fit-content;
  left: 18px;
  pointer-events: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const IconEmailTabletStyle = styled(Icon)`
  display: none;
  pointer-events: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: fit-content;
    left: 18px;
  }
`;

export const SubscribeButton = styled.button`
  background-color: var(--color-white);
  padding: 12px 84px;
  border-radius: 62px;
  border: 1px solid transparent;
  outline-offset: 4px;
  font-weight: ${WEIGHT.medium};
  user-select: none;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${12 / 16}rem;
    padding: 10px 54px 10px 54px;
  }
`;
