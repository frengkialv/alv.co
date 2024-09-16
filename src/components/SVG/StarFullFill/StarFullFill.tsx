import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/types/common";

const StarBorderIcon = ({ width = "18px", height, ...props }: SVGProps) => {
  return (
    <Wrapper $width={width} $height={height}>
      <SVGWrapper
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
        data-name="Line Color"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M12 4 9.22 9.27 3 10.11l4.5 4.1L6.44 20 12 17.27 17.56 20l-1.06-5.79 4.5-4.1-6.22-.84L12 4z"
          style={{
            fill: "#ffc633",
            stroke: "#ffc633",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </SVGWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ $width: string; $height: string | undefined }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const SVGWrapper = styled.svg`
  min-width: 18px;
  width: 100%;
  height: 100%;
`;
export default StarBorderIcon;
