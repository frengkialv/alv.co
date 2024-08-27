"use client";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 6px;
  }
`;

export const ReservedText = styled.span`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
  user-select: none;
  filter: drop-shadow(1px 1px 4px hsl(0deg 0% 0% / 0.4));
`;

export const PaymentLogoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const PaymentLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #d6dce5;
  padding: 6px 10px;
  background-color: var(--color-white);
  user-select: none;
  filter: drop-shadow(1px 1px 4px hsl(0deg 0% 0% / 0.4));

  @media ${QUERIES.phoneAndSmaller} {
    padding: 4px 6px;
  }
`;
