"use client";
import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "light";
  size?: "small" | "medium" | "large" | "grow";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const sizes = {
  small: css`
    padding: 10px 20px;
    font-size: 14px;
  `,
  medium: css`
    padding: 12px 25px;
    font-size: 16px;
  `,
  large: css`
    padding: 15px 30px;
    font-size: 18px;
  `,
  grow: css`
    padding: 12px 25px;
  `,
};

const variants = {
  primary: css`
    color: #ffffff;
    background-color: #000000;
  `,
  secondary: css`
    color: #606060;
    background-color: #f0f0f0;
  `,
  light: css`
    color: #000000;
    background-color: #ffffff;
  `,
};

function Button({
  variant = "primary",
  size = "medium",
  type = "button",
  children,
  disabled = false,
  onClick,
  ...delegated
}: ButtonProps) {
  return (
    <Wrapper
      variant={variant}
      size={size}
      type={type}
      {...delegated}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{
  variant: "primary" | "secondary" | "light";
  size: "small" | "medium" | "large" | "grow";
  disabled?: boolean;
}>`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: ${(props) => (props.size === "grow" ? "100%" : "fit-content")};
  border-radius: 60px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  border: 1px solid transparent;
  outline-offset: 4px;
  white-space: nowrap;
  transition: background-color 0.3s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}
`;

export default Button;
