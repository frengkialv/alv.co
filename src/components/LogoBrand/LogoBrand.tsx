"use client";
import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import VersaceLogo from "../SVG/VersaceLogo";
import ZaraLogo from "../SVG/ZaraLogo";
import GucciLogo from "../SVG/GucciLogo";
import PradaLogo from "../SVG/PradaLogo";
import CKLogo from "../SVG/CKLogo";
import StussyLogo from "../SVG/StussyLogo";
import ChampionLogo from "../SVG/ChampionLogo";
import ObeyLogo from "../SVG/ObeyLogo";
import { QUERIES } from "@/constants";

function LogoBrand() {
  return (
    <Wrapper>
      <Marquee gradient={true} gradientWidth={150} gradientColor="rgb(0, 0, 0)">
        <LogoWrapper>
          <VersaceLogo width="var(--versace-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <StussyLogo width="var(--stussy-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <ZaraLogo width="var(--zara-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <GucciLogo width="var(--gucci-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <ObeyLogo width="var(--obey-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <PradaLogo width="var(--prada-logo-width)" />
        </LogoWrapper>
        <LogoWrapper style={{ marginTop: "10px" }}>
          <ChampionLogo width="var(--champion-logo-width)" />
        </LogoWrapper>
        <LogoWrapper>
          <CKLogo width="var(--ck-logo-width)" />
        </LogoWrapper>
      </Marquee>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --versace-logo-width: 160px;
  --stussy-logo-width: 70px;
  --champion-logo-width: 170px;
  --obey-logo-width: 100px;
  --zara-logo-width: 80px;
  --gucci-logo-width: 160px;
  --prada-logo-width: 180px;
  --ck-logo-width: 200px;

  padding-top: clamp(1rem, 2.2vw + 0.5rem, 1.4rem);
  padding-bottom: clamp(1rem, 2.2vw + 0.5rem, 1.4rem);
  background-color: var(--color-black);
  isolation: isolate;

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 20px;
    padding-bottom: 20px;

    --versace-logo-width: 116px;
    --stussy-logo-width: 50px;
    --champion-logo-width: 120px;
    --obey-logo-width: 70px;
    --zara-logo-width: 64px;
    --gucci-logo-width: 110px;
    --prada-logo-width: 127px;
    --ck-logo-width: 135px;
  }
`;

const LogoWrapper = styled.div`
  margin-left: 70px;
  margin-right: 70px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
export default LogoBrand;
