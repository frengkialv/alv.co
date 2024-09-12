"use client";
import React from "react";
import styled from "styled-components";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Mail,
  Menu,
  Search,
  Scissors,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Trash2,
  Twitter,
  User,
  X,
} from "react-feather";

const icons = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  clock: Clock,
  close: X,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  email: Mail,
  home: Home,
  menu: Menu,
  scissors: Scissors,
  search: Search,
  "shopping-bag": ShoppingBag,
  "shopping-cart": ShoppingCart,
  tag: Tag,
  trash2: Trash2,
  twitter: Twitter,
  user: User,
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
