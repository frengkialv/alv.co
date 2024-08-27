"use client";
import React from "react";
import styled from "styled-components";
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  Clock,
  ArrowLeft,
  ArrowRight,
  Mail,
  Twitter,
  Scissors,
} from "react-feather";

const icons = {
  search: Search,
  close: X,
  "shopping-cart": ShoppingCart,
  "chevron-down": ChevronDown,
  user: User,
  menu: Menu,
  clock: Clock,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  email: Mail,
  twitter: Twitter,
  scissors: Scissors,
};

function Icon({
  id,
  color = "black",
  size = 24,
  strokeWidth = 1,
  ...delegated
}) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      strokeWidth={strokeWidth}
      style={{ "--min-width": "22px" }}
      {...delegated}
    >
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: var(--min-width);
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
