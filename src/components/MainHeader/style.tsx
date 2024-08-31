"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import UnstyledButton from "../UnstyledButton";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px var(--padding-horizontal-wrapper);
  background-color: var(--color-white-blur);
  backdrop-filter: blur(4px);

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  --font-size: ${32 / 16}rem;
  margin-top: 5px;

  @media ${QUERIES.phoneAndSmaller} {
    --font-size: ${28 / 16}rem;
  }
`;

export const WrapperSearchInput = styled.div`
  flex: 1;
  min-width: 250px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
