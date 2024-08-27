"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  justify-items: center;
  gap: 30px 20px;
  padding-top: 40px;
  padding-bottom: 46px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(4, 200px);
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 24px;
    overflow: auto;

    // For hide the scrollbar but still scrollable
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari & Chrome */
    }
  }
`;
