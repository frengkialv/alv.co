"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { QUERIES } from "@/constants";
import { HeaderContext } from "../Provider/HeaderProvider";

function SuperHeader() {
  const { showSuperHeader, setShowSuperHeader } =
    React.useContext(HeaderContext);

  if (!showSuperHeader) {
    return null;
  }
  return (
    <SuperHeaderWrapper>
      {/* <Filler /> */}
      {showSuperHeader && (
        <MarketingMassage>
          Extra 20% Off + 5% Cashback For Your First Order.
        </MarketingMassage>
      )}

      {/* <WrapperButton>
        <UnstyledBotton onClick={() => setShowSuperHeader(false)}>
          <Icon id="close" strokeWidth={2} color="white" />
        </UnstyledBotton>
      </WrapperButton> */}
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

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
  }
`;

const Filler = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MarketingMassage = styled.div`
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 12px;
  }
`;

const WrapperButton = styled.div`
  text-align: end;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default SuperHeader;
