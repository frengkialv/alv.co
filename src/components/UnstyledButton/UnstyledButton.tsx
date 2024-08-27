"use client";
import styled from "styled-components";

export default styled.button<{ display?: string }>`
  display: ${(props) => props.display || "block"};
  font: inherit;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  color: inherit;
  cursor: pointer;
  user-select: none;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
