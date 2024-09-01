"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import EmptyCartImage from "../../../public/empty-cart.png";
import { WEIGHT } from "@/constants";
import BadgeNotification from "../BadgeNotification";

export function CartIconTrigger() {
  return (
    <BadgeNotification badgeNumber={5}>
      <UnstyledButton>
        <Icon id="shopping-cart" strokeWidth={2.5} size={22} />
      </UnstyledButton>
    </BadgeNotification>
  );
}

function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <Image
        src={EmptyCartImage}
        alt="Empty Cart"
        quality={100}
        width={300}
        height={300}
      />
      <TextWrapper>
        <BoldText>Your Bag Is Empty</BoldText>
        <NormalText>Start filling it up with your favourites</NormalText>
      </TextWrapper>
    </EmptyCartWrapper>
  );
}

function CartContent() {
  return (
    <Wrapper>
      <EmptyCart />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const EmptyCartWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoldText = styled.h6``;

const NormalText = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
`;

export default CartContent;
