import React from "react";
import VisaLogo from "../SVG/VisaLogo";
import MastercardLogo from "../SVG/MastercardLogo";
import PaypalLogo from "../SVG/PaypalLogo";
import GooglePayLogo from "../SVG/GooglePayLogo";
import AppplePayLogo from "../SVG/AppplePayLogo";
import {
  PaymentLogo,
  PaymentLogoWrapper,
  ReservedText,
  Wrapper,
} from "./style";

function ReservedFooter() {
  return (
    <Wrapper>
      <ReservedText>ALV.CO © 2000-2024, All Rights Reserved</ReservedText>
      <div style={{ flex: 1 }} />
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

export default ReservedFooter;
