"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";

function Logo() {
  return (
    <Link href="/">
      <Wrapper>ALV.CO</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  color: var(--color-black);
  user-select: none;
`;

const Wrapper = styled.h1`
  font-size: var(--font-size);
  font-weight: ${WEIGHT["bold"]};
  font-family: var(--integral-cf);

  @media ${QUERIES.phoneAndSmaller} {
    line-height: 27px;
  }
`;

export default Logo;
