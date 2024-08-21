import React from "react";
import styled, { keyframes } from "styled-components";
import UnstyledBotton from "../UnstyledButton";
import Icon from "../Icon";
import { QUERIES, WEIGHT } from "@/constants";

interface SuperHeaderProps {
  handleShowSuperHeader: (val: boolean) => void;
}

function SuperHeader({ handleShowSuperHeader }: SuperHeaderProps) {
  return (
    <Wrapper>
      <Filler />
      <MarketingMassage>
        Extra 20% Off + 5% Cashback to Your First Order.
      </MarketingMassage>

      <WrapperButton>
        <UnstyledBotton onClick={() => handleShowSuperHeader(false)}>
          <Icon id="close" strokeWidth={2} color="white" />
        </UnstyledBotton>
      </WrapperButton>
    </Wrapper>
  );
}

const fadeOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

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

const Filler = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const MarketingMassage = styled.div`
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 12px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  font-weight: ${WEIGHT.medium};
  cursor: pointer;
`;

const WrapperButton = styled.div`
  text-align: end;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default SuperHeader;
