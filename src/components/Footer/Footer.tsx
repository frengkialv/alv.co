import React from "react";
import FooterInformation from "../FooterInformation";
import ReservedFooter from "../ReservedFooter";
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
  );
}

export default React.memo(Footer);
