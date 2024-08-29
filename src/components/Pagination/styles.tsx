"use client";
import { WEIGHT } from "@/constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
`;

export const Button = styled.button<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  will-change: transform;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const WrapperPage = styled.div`
  display: flex;
  gap: 4px;
`;

export const NumberButton = styled.button<{
  $selected: boolean;
  $disabled?: boolean;
}>`
  background-color: ${(props) => (props.$selected ? "#f0f0f0" : "transparent")};
  color: ${(props) => (props.$selected ? "var(--color-black)" : "#808080")};
  padding: 10px 16px;
  border: transparent;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  will-change: transform;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;
