"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px;
  }
`;
