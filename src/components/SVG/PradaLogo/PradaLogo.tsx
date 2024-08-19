import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/type";

const PradaLogo = ({
  width = "195px",
  height,
  color = "#FFFFFF",
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      fill="none"
      viewBox="0 0 195 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        stroke={color}
        strokeMiterlimit={2.613}
        strokeWidth={1.024}
        d="m.482.902 2.932 3.306v24.203L1.24 31.577l13.31.02-2.4-2.913-.249-8.716 12.833.07c3.89-1.296 7.889-4.056 8.08-9.638-.06-5.41-3.363-8.88-7.197-9.57L.482.903ZM11.427 2.45v15.548l9.846.07c2.24-1.806 3.939-3.19 3.87-7.527-.032-3.537-.778-6.62-4.074-8.09l-9.642-.001ZM38.974.725l2.932 3.308v24.202l-2.173 3.168 13.309.02-2.399-2.915-.249-8.716h.053l13.75 11.729 11.411-.094-10.414-9.008H56.5l-3.064-2.61 9.792.053c3.89-1.295 7.888-4.056 8.08-9.638-.06-5.409-3.362-8.879-7.197-9.568l-25.136.07ZM49.92 2.273v15.548l9.847.071c2.24-1.806 3.938-3.19 3.87-7.528-.032-3.536-.778-6.621-4.074-8.09h-9.643ZM86.595.691H98.07l14.938 27.72c.647 2.14 2.58 1.876 3.871 2.814h-14.464l2.174-.68-.136-2.063-3.735-5.98-12.698.07-2.716 5.77c-.09.656-.793 1.154-.272 1.97l1.02.984-6.248-.141 2.717-.844 10.252-21.6V7.235l-4.332-5.779-1.847-.764Zm2.229 19.907 5.274-9.986 5.49 9.93-10.764.056ZM164.197.75h11.475l14.939 27.72c.646 2.14 2.58 1.877 3.871 2.815h-14.465l2.174-.681-.136-2.064-3.735-5.98-12.698.072-2.716 5.768c-.091.657-.792 1.155-.272 1.97l1.019.985-6.246-.14 2.716-.844 10.253-21.6V7.293l-4.332-5.777-1.847-.765Zm2.228 19.908 5.274-9.985 5.492 9.927-10.766.058ZM120.849.402l20.443.113c6.583 1.542 10.772 5.564 12.071 12.58l-.055 5.472c-1.2 6.252-5.133 10.565-12.07 12.748l-20.498.058-.003-.662c3.116-.236 3.365-.591 3.373-2.441V3.335c-.035-1.368-.308-2.22-3.316-2.313l.055-.62Zm11.62 2.134-.019 26.977c2.696.01 5.035.262 6.356-.412 2.995-1.368 4.385-3.468 4.513-5.441l-.072-15.93c.001-2.548-2.765-4.347-4.362-4.816-1.142-.423-3.42-.44-6.416-.378Z"
        clipRule="evenodd"
      />
      <defs>
        <clipPath id="a">
          <path fill={color} d="M.482 0h194v32h-194z" />
        </clipPath>
      </defs>
    </SVGWrapper>
  </Wrapper>
);

const Wrapper = styled.div<{ $width: string; $height: string | undefined }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const SVGWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export default PradaLogo;
