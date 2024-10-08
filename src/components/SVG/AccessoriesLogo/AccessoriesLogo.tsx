import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

const AccessoriesLogo = (props: SVGProps<SVGSVGElement>) => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z" />
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export default AccessoriesLogo;
