import React from "react";
import styled, { css } from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export enum SizeProps {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const SIZE = {
  small: css`
    width: 28px;
    height: 28px;
  `,
  medium: css`
    width: 32px;
    height: 32px;
  `,
  large: css`
    width: 36px;
    height: 36px;
  `,
};

function Avatar({
  src,
  size = SizeProps.MEDIUM,
}: {
  src: string;
  size?: SizeProps;
}) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Root $size={size}>
        <Image src={src} alt="Display Picture" />
        <Fallback delayMs={600}>FA</Fallback>
      </Root>
    </div>
  );
}

const Root = styled(AvatarPrimitive.Root)<{ $size: SizeProps }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;
  cursor: pointer;

  ${(props) => SIZE[props.$size]}
`;

const Image = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const Fallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--violet-11);
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;

export default Avatar;
