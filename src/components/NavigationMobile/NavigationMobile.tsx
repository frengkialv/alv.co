"use client";
import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Icon from "../Icon";
import Accordion from "../Accordion";
import ShirtLogo from "../SVG/ShirtLogo";
import ShoesLogo from "../SVG/ShoesLogo";
import AccessoriesLogo from "../SVG/AccessoriesLogo";
import SportLogo from "../SVG/SportLogo";
import HangerLogo from "../SVG/HangerLogo";
import SaleIcon from "../SVG/SaleIcon";
import Logo from "../Logo";
import { LogoWrapper } from "../MainHeader/style";
import { QUERIES, WEIGHT } from "@/constants";

interface Props {
  open: boolean | undefined;
  onOpenChange: (val: boolean) => void;
}

function AccordionHeader() {
  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "center",
        fontWeight: 500,
      }}
    >
      <Icon id="shopping-bag" size={18} strokeWidth={2} />
      Shop
    </div>
  );
}

function FillerContentAccordion({
  onOpenChange,
}: {
  onOpenChange: (val: boolean) => void;
}) {
  return (
    <FillerContentWrapper>
      <LinkWrapper href="/t-shirts" onClick={() => onOpenChange(false)}>
        <ShirtLogo />
        T-Shirts
      </LinkWrapper>
      <LinkWrapper href="/shoes" onClick={() => onOpenChange(false)}>
        <ShoesLogo />
        Shoes
      </LinkWrapper>
      <LinkWrapper href="/accessories" onClick={() => onOpenChange(false)}>
        <AccessoriesLogo />
        Accessories
      </LinkWrapper>
      {/* <LinkWrapper href="/sport" onClick={() => onOpenChange(false)}>
        <SportLogo />
        Sport
      </LinkWrapper> */}
    </FillerContentWrapper>
  );
}

function NavigationMobile({ open, onOpenChange }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Backdrop />
        <Content aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <Dialog.Title>Navigation Modal</Dialog.Title>
            <Dialog.Description />
          </VisuallyHidden.Root>
          <InnerWrapper>
            <Header>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <Dialog.Close asChild>
                <CloseButton className="IconButton" aria-label="Close">
                  <Icon id="close" strokeWidth={1.5} />
                </CloseButton>
              </Dialog.Close>
            </Header>

            <MainContent>
              <LinkWrapper
                style={{ marginTop: "-8px" }}
                href="/"
                onClick={() => onOpenChange(false)}
              >
                <Icon id="home" size={20} strokeWidth={2} />
                Home
              </LinkWrapper>
              <Accordion header={<AccordionHeader />} value="nav-mobile">
                <FillerContentAccordion onOpenChange={onOpenChange} />
              </Accordion>
              <LinkWrapper
                style={{ marginTop: "-13px" }}
                href="/on-sale"
                onClick={() => onOpenChange(false)}
              >
                <SaleIcon />
                On Sale
              </LinkWrapper>
              <LinkWrapper
                href="/new-arrivals"
                onClick={() => onOpenChange(false)}
              >
                <HangerLogo style={{ marginRight: "0px" }} />
                New Arrivals
              </LinkWrapper>
              <LinkWrapper href="/brands" onClick={() => onOpenChange(false)}>
                <Icon id="tag" strokeWidth={2} size={20} />
                Brands
              </LinkWrapper>
            </MainContent>
          </InnerWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    left: -400px;
  }

  to {
    left: 0;
  }
`;

const Backdrop = styled(Dialog.Overlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  inset: 0;
  animation: ${fadeIn} 0.3s linear;
  will-change: transform;
`;

const Content = styled(Dialog.Content)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  animation: ${slideIn} 0.3s ease-out;
  animation-fill-mode: backwards;
  will-change: transform;

  @media ${QUERIES.phoneAndSmaller} {
    width: 80%;
  }
`;

const InnerWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px 20px 25px;
  border-bottom: 1px solid var(--color-gray-200);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 6px;
  user-select: none;
  cursor: pointer;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 25px;
`;

const FillerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 28px;
  margin-top: -7px;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  gap: 14px;
  align-items: center;
  color: var(--color-black);
  font-weight: ${WEIGHT.medium};
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
`;

export default NavigationMobile;
