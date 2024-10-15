"use client";
import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/types/common";

const CheckmarkIcon = ({
  width = "24px",
  height,
  color = "black",
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      viewBox="0 0 0.6 0.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.491 0.156a0.025 0.025 0 0 1 0.004 0.035l-0.225 0.275a0.025 0.025 0 0 1 -0.037 0.002l-0.125 -0.125a0.025 0.025 0 1 1 0.035 -0.035l0.105 0.105 0.208 -0.254a0.025 0.025 0 0 1 0.035 -0.004Z"
        fill={color}
      />
    </SVGWrapper>
  </Wrapper>
);

const Wrapper = styled.div<{ $width: string; $height: string | undefined }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const SVGWrapper = styled.svg`
  min-width: 18px;
  width: 100%;
  height: 100%;
`;

export default CheckmarkIcon;
