"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { QUERIES } from "@/constants";

function SuperHeader() {
  return (
    <SuperHeaderWrapper>
      <MarketingMassage>
        Extra 20% Off + 5% Cashback For Your First Order.
      </MarketingMassage>
    </SuperHeaderWrapper>
  );
}

const dropIn = keyframes`
  from {
    transform: translateY(
      -100%
    );
  }
  to {
    transform: translateY(0%);
  }
`;

const SuperHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px 30px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${dropIn} 800ms linear;
  }
`;

const MarketingMassage = styled.div`
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 12px;
  }
`;

export default SuperHeader;
