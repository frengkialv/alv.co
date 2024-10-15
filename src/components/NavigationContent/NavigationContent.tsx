"use client";
import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from "styled-components";
import Icon from "../Icon";
import AccessoriesLogo from "../SVG/AccessoriesLogo";
import ShirtLogo from "../SVG/ShirtLogo";
import ShoesLogo from "../SVG/ShoesLogo";
import SportLogo from "../SVG/SportLogo";
import { QUERIES, WEIGHT } from "@/constants";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href: string;
}

const ListItem = ({ href, children, ...props }: ListItemProps) => {
  return (
    <li {...props}>
      <LinkDropdown href={href}>{children}</LinkDropdown>
    </li>
  );
};

function NavigationContent() {
  return (
    <Wrapper>
      <Nav>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <WrapperShopLink>
              Shop
              <ChevronIcon id="chevron-down" strokeWidth={2} size={20} />
            </WrapperShopLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ListItemWrapper>
              <ListItem href="/t-shirts">
                <ShirtLogo />
                T-Shirts
              </ListItem>
              <ListItem href="/shoes">
                <ShoesLogo />
                Shoes
              </ListItem>
              <ListItem href="/accessories">
                <AccessoriesLogo />
                Accessories
              </ListItem>
              <ListItem href="/sport">
                <SportLogo />
                Sport
              </ListItem>
            </ListItemWrapper>

            <Arrow />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <LinkWrapper href="/on-sale">On Sale</LinkWrapper>
        <LinkWrapper href="/new-arrivals">New Arrivals</LinkWrapper>
        <LinkWrapper href="/brands">Brands</LinkWrapper>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled(NavigationMenu.Root)`
  @media (max-width: ${1350 / 16}rem) {
    flex: 1;
    justify-content: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Nav = styled(NavigationMenu.List)`
  display: flex;
  gap: 24px;

  @media (max-width: ${1350 / 16}rem) {
    flex: 1;
    justify-content: center;
  }
`;

const NavigationMenuItem = styled(NavigationMenu.Item)`
  position: relative;
`;

const ChevronIcon = styled(Icon)`
  @media (prefers-reduced-motion: no-preference) {
    transition: 300ms;
  }
`;

const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  outline: none;
  border: none;
  user-select: none;
  background-color: transparent;

  &[data-state="open"] ${ChevronIcon} {
    transform: rotate(180deg);
  }
`;

const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  padding: 20px 30px;
  background-color: var(--color-white);
  filter: drop-shadow(2px 4px 8px hsl(0deg 0% 0% / 0.4));
`;

const ListItemWrapper = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 22px;
`;

const Arrow = styled.div`
  position: absolute;
  top: -5px;
  left: 80px;
  width: 10px;
  height: 10px;
  background-color: var(--color-white);
  transform: rotate(45deg);
`;

const LinkDropdown = styled(Link)`
  display: flex;
  gap: 14px;
  align-items: center;
  color: var(--color-black);
  font-weight: ${WEIGHT.medium};
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
`;

const LinkWrapper = styled(Link)`
  color: var(--color-black);
  font-weight: ${WEIGHT["medium"]};
  position: relative;
  transition: 0.4s;
  user-select: none;
  white-space: nowrap;

  @media (prefers-reduced-motion: no-preference) {
    &::after {
      content: "";
      height: 2px;
      width: 0px;
      background-color: var(--color-black);
      border-radius: 10px;
      position: absolute;
      bottom: -5px;
      right: 0;
      transition: 0.4s;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

const WrapperShopLink = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--color-black);
  font-weight: ${WEIGHT["medium"]};
  cursor: pointer;
`;

export default NavigationContent;
