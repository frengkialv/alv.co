import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

const ShirtLogo = (props: SVGProps<SVGSVGElement>) => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M17 11a2 2 0 0 1 2-2h2V4h-5.126a4.002 4.002 0 0 1-7.748 0H3v5h2a2 2 0 0 1 2 2v9h10v-9ZM2 11a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h6.5a.5.5 0 0 1 .5.5V3a2 2 0 1 0 4 0v-.5a.5.5 0 0 1 .5-.5H21a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9H2Z"
        clipRule="evenodd"
      />
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 19px;
  height: 19px;
`;

export default ShirtLogo;
