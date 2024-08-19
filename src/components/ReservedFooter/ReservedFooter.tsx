import React from "react";
import styled from "styled-components";
import VisaLogo from "../SVG/VisaLogo";
import MastercardLogo from "../SVG/MastercardLogo";
import PaypalLogo from "../SVG/PaypalLogo";
import GooglePayLogo from "../SVG/GooglePayLogo";
import AppplePayLogo from "../SVG/AppplePayLogo";
import { QUERIES } from "@/constants";

function ReservedFooter() {
  return (
    <Wrapper>
      <ReservedText>ALV.CO © 2000-2024, All Rights Reserved</ReservedText>
      <Filler />
      <PaymentLogoWrapper>
        <PaymentLogo>
          <VisaLogo />
        </PaymentLogo>

        <PaymentLogo>
          <MastercardLogo />
        </PaymentLogo>

        <PaymentLogo>
          <PaypalLogo />
        </PaymentLogo>

        <PaymentLogo>
          <AppplePayLogo />
        </PaymentLogo>

        <PaymentLogo>
          <GooglePayLogo />
        </PaymentLogo>
      </PaymentLogoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 6px;
  }
`;

const ReservedText = styled.span`
  font-size: ${14 / 16}rem;
  color: #7b7b7b;
  filter: drop-shadow(1px 1px 4px hsl(0deg 0% 0% / 0.4));
`;

const Filler = styled.div`
  flex: 1;
`;

const PaymentLogoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const PaymentLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #d6dce5;
  padding: 6px 10px;
  background-color: var(--color-white);
  user-select: none;
  filter: drop-shadow(1px 1px 4px hsl(0deg 0% 0% / 0.4));

  @media ${QUERIES.phoneAndSmaller} {
    padding: 4px 6px;
  }
`;

export default ReservedFooter;
