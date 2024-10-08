"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 30px 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-gray-200);

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
`;
