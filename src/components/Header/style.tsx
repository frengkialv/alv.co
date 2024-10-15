"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: -44px;
  z-index: 1;

  @media ${QUERIES.phoneAndSmaller} {
    top: -42px;
  }
`;
