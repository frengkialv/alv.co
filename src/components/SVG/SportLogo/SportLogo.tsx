import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

const SportLogo = (props: SVGProps<SVGSVGElement>) => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M36 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m12 16.77 8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643 38 23.102 44 17.466M16.849 31.545l-2.97 3.912-9.875 5.54"
      />
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 19px;
  height: 19px;
`;

export default SportLogo;
