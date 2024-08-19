import React from "react";
import Image from "next/image";
import styled from "styled-components";
import VersaceLogo from "../SVG/VersaceLogo";
import ZaraLogo from "../SVG/ZaraLogo";
import GucciLogo from "../SVG/GucciLogo";
import PradaLogo from "../SVG/PradaLogo";
import CKLogo from "../SVG/CKLogo";
import { QUERIES } from "@/constants";

function LogoBrand() {
  return (
    <Wrapper>
      <VersaceLogo width="var(--versace-logo-width)" />
      <ZaraLogo width="var(--zara-logo-width)" />
      <GucciLogo width="var(--gucci-logo-width)" />
      <PradaLogo width="var(--prada-logo-width)" />
      <CKLogo width="var(--ck-logo-width)" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --versace-logo-width: 160px;
  --zara-logo-width: 80px;
  --gucci-logo-width: 160px;
  --prada-logo-width: 180px;
  --ck-logo-width: 200px;

  display: flex;
  justify-content: space-between;
  padding: clamp(1.2rem, 2.2vw + 0.5rem, 2.5rem)
    clamp(1rem, 14vw - 5rem, 6.25rem);
  gap: 40px;
  background-color: var(--color-black);

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding-top: 39px;
    padding-bottom: 39px;

    --versace-logo-width: 116px;
    --zara-logo-width: 64px;
    --gucci-logo-width: 110px;
    --prada-logo-width: 127px;
    --ck-logo-width: 135px;
  }
`;

const LogoWrapper = styled(Image)``;

export default LogoBrand;
