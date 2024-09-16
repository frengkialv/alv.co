import React from "react";
import FooterInformation from "../FooterInformation";
import ReservedFooter from "../ReservedFooter";
import FooterProvider from "../Provider/FooterProvider";
import {
  Filler,
  SubscribeButton,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeText,
  SubscribeWrapper,
  Wrapper,
} from "./style";

function Footer() {
  return (
    <FooterProvider>
      <Wrapper>
        <SubscribeWrapper className="subscribe-wrapper">
          <SubscribeText>STAY UP TO DATE ABOUT OUR LATEST OFFERS</SubscribeText>

          <Filler />

          <SubscribeInputWrapper>
            <div style={{ position: "relative" }}>
              <SubscribeInput />
            </div>
            <SubscribeButton>Subscribe to Newsletter</SubscribeButton>
          </SubscribeInputWrapper>
        </SubscribeWrapper>

        <FooterInformation />

        <ReservedFooter />
      </Wrapper>
    </FooterProvider>
  );
}

export default React.memo(Footer);
