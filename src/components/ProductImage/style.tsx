"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const Wrapper = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  gap: 14px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
  }
`;

export const ImageSelect = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    flex: none;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`;

export const ImageItem = styled.div`
  height: 100%;
  border-radius: 14px;
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    height: auto;
  }
`;

export const RowImageDisplay = styled.div`
  position: "relative";
  width: "100%";
  height: "100%";
  min-height: 100%;
  min-width: 100%;
`;

export const ImageDisplay = styled.div`
  flex: 3;
  border-radius: 14px;
  overflow: hidden;
`;

export const ImageShowcase = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  transition: all 0.5s ease;
`;
