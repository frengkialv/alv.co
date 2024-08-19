import { QUERIES, WEIGHT } from "@/constants";
import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Tooltip from "../Tooltip";
import TwitterLogo from "../SVG/TwitterLogo";
import FacebookLogo from "../SVG/FacebookLogo";
import InstagramLogo from "../SVG/InstagramLogo";
import GithubLogo from "../SVG/GithubLogo";

function FooterInformation() {
  return (
    <>
      <MobileInformation>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Filler />

        <DescriptionWebsite>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </DescriptionWebsite>

        <Filler />

        <ButtonSocialMediaWrapper>
          <RoundedButton>
            <TwitterLogo />
          </RoundedButton>
          <RoundedButton>
            <FacebookLogo />
          </RoundedButton>
          <RoundedButton>
            <InstagramLogo />
          </RoundedButton>
          <RoundedButton>
            <GithubLogo />
          </RoundedButton>
        </ButtonSocialMediaWrapper>
      </MobileInformation>

      <InformationWrapper>
        <DekstopInformation>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <Filler />

          <DescriptionWebsite>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </DescriptionWebsite>

          <Filler />

          <ButtonSocialMediaWrapper>
            <Tooltip text="Twitter">
              <RoundedButton>
                <TwitterLogo />
              </RoundedButton>
            </Tooltip>
            <Tooltip text="Facebook">
              <RoundedButton>
                <FacebookLogo />
              </RoundedButton>
            </Tooltip>
            <Tooltip text="Instagram">
              <RoundedButton>
                <InstagramLogo />
              </RoundedButton>
            </Tooltip>
            <Tooltip text="Github">
              <RoundedButton>
                <GithubLogo />
              </RoundedButton>
            </Tooltip>
          </ButtonSocialMediaWrapper>
        </DekstopInformation>

        <Row>
          <RowHeader>COMPANY</RowHeader>

          <Detail>
            <Text>About</Text>
            <Text>Features</Text>
            <Text>Works</Text>
            <Text>Career</Text>
          </Detail>
        </Row>
        <Row>
          <RowHeader>HELP</RowHeader>

          <Detail>
            <Text>Customer Support</Text>
            <Text>Delivery Details</Text>
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy</Text>
          </Detail>
        </Row>
        <Row>
          <RowHeader>FAQ</RowHeader>

          <Detail>
            <Text>Account</Text>
            <Text>Manage Deliveries</Text>
            <Text>Orders</Text>
            <Text>Payments</Text>
          </Detail>
        </Row>
        <Row>
          <RowHeader>RESOURCES</RowHeader>
          <Detail>
            <Text>Free eBooks</Text>
            <Text>Development Tutorial</Text>
            <Text>How to - Blog</Text>
            <Text>Youtube Playlist</Text>
          </Detail>
        </Row>
      </InformationWrapper>
    </>
  );
}

const MobileInformation = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const DekstopInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(auto-fill, minmax(135px, 1fr));
  justify-content: space-between;
  gap: 45px clamp(2rem, 16vw - 6.5rem, 7rem);
  padding-bottom: 50px;
  border-bottom: 2px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 30px 80px;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  --font-size: ${32 / 16}rem;
  width: fit-content;
  margin-bottom: -18px;

  @media ${QUERIES.phoneAndSmaller} {
    --font-size: ${28 / 16}rem;
  }
`;

const DescriptionWebsite = styled.p`
  font-size: ${14 / 16}rem;
  color: #7b7b7b;
`;

const ButtonSocialMediaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const RoundedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  border: none;
  outline-offset: 3px;
  cursor: pointer;
  user-select: none;
`;

const RowHeader = styled.span`
  font-weight: ${WEIGHT.medium};
  letter-spacing: 3px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Detail = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  flex-direction: column;
  gap: 15px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    gap: 12px;
  }
`;

const Text = styled.span`
  color: #7b7b7b;
`;

export default FooterInformation;
