import React from "react";
import Logo from "../Logo";
import TwitterLogo from "../SVG/TwitterLogo";
import FacebookLogo from "../SVG/FacebookLogo";
import InstagramLogo from "../SVG/InstagramLogo";
import {
  ButtonSocialMediaWrapper,
  DekstopInformation,
  DescriptionWebsite,
  Detail,
  Filler,
  InformationWrapper,
  LogoWrapper,
  MobileInformation,
  RoundedButton,
  Row,
  RowHeader,
  Text,
} from "./style";

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
          <RoundedButton textTooltip="Twitter">
            <TwitterLogo />
          </RoundedButton>
          <RoundedButton textTooltip="Facebook">
            <FacebookLogo />
          </RoundedButton>
          <RoundedButton textTooltip="Instagram">
            <InstagramLogo />
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
            <RoundedButton textTooltip="Twitter">
              <TwitterLogo />
            </RoundedButton>
            <RoundedButton textTooltip="Facebook">
              <FacebookLogo />
            </RoundedButton>
            <RoundedButton textTooltip="Instagram">
              <InstagramLogo />
            </RoundedButton>
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

export default FooterInformation;
