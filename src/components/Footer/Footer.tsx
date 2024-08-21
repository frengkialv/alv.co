import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import Spacer from "../Spacer";
import Icon from "../Icon";
import FooterInformation from "../FooterInformation";
import ReservedFooter from "../ReservedFooter";

function Footer() {
  const [subscriberWrapperHeight, setSubscriberWrapperHeight] =
    useState<number>(0);

  useEffect(() => {
    // Call handler right away so state gets updated with initial window size
    handlerSubscriberWrapperHeightt();

    function handlerSubscriberWrapperHeightt() {
      const displayHeight =
        document.querySelector(".subscribe-wrapper")?.clientHeight;

      if (displayHeight && !isNaN(displayHeight)) {
        setSubscriberWrapperHeight(displayHeight);
      }
    }
    // Add event listener
    window.addEventListener("resize", handlerSubscriberWrapperHeightt);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handlerSubscriberWrapperHeightt);
    };
  }, []);

  return (
    <Wrapper $height={subscriberWrapperHeight}>
      <SubscribeWrapper className="subscribe-wrapper">
        <SubscribeText>STAY UP TO DATE ABOUT OUR LATEST OFFERS</SubscribeText>

        <FillerDekstop />

        <SubscribeInputWrapper>
          <SubscribeInputinnerWrapper>
            <SubscribeInput
              placeholder="Enter your email address"
              type="email"
            />

            <IconEmailDekstop
              id="email"
              strokeWidth={3}
              color="#999999"
              size={20}
            />

            <IconEmailTablet
              id="email"
              strokeWidth={2}
              color="#999999"
              size={16}
            />
          </SubscribeInputinnerWrapper>
          <SubscribeButton>Subscribe to Newsletter</SubscribeButton>
        </SubscribeInputWrapper>
      </SubscribeWrapper>

      <FooterInformation />

      <ReservedFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $height: number }>`
  --top: ${(props) => "-" + props.$height / 2 + "px"};
  --padding-top: ${(props) =>
    props.$height ? props.$height / 2 + 40 + "px" : "190px"};
  position: relative;
  padding-top: var(--padding-top);
  padding-bottom: 40px;
  padding-left: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-right: clamp(1rem, 14vw - 5rem, 6.25rem);
  margin-top: ${(props) => props.$height / 2 + 50 + "px"};
  background-color: var(--color-gray-900);
`;

const SubscribeWrapper = styled.div`
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
  width: calc(100% - (clamp(1rem, 14vw - 5rem, 6.25rem) * 2));
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

const SubscribeText = styled.h1`
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

const Filler = styled.div`
  flex: 1;
`;

const FillerDekstop = styled(Filler)`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const SubscribeInputinnerWrapper = styled.div`
  position: relative;
`;

const SubscribeInput = styled.input`
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

const IconEmailDekstop = styled(Icon)`
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

const IconEmailTablet = styled(Icon)`
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

const SubscribeButton = styled.button`
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

export default Footer;
