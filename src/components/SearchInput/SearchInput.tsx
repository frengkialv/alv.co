"use client";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}

const SearchInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...delegated
}: Props) => {
  return (
    <Wrapper {...delegated}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <SearchIcon id="search" strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  text-decoration: none;
  background-color: var(--color-pearls);
  border: 1px solid transparent;
  padding: 12px 16px 12px 50px;
  border-radius: 25px;
  color: var(--color-gray-600);
  outline-offset: 4px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 16px;
  color: var(--color-gray-600);
  pointer-events: none;
`;

export default SearchInput;
