"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  padding: 20px 24px;
  border: 1px solid var(--color-gray-100);
  border-radius: 20px;
`;

export const Header = styled.h5`
  display: flex;
  justify-content: space-between;
  font-size: ${20 / 16}rem;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-gray-200);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  padding-top: 18px;

  &:first-child {
    padding-bottom: 6px;
  }
  &:not(&:last-child) {
    padding-bottom: 9px;
    border-bottom: 1px solid var(--color-gray-200);
  }
`;
