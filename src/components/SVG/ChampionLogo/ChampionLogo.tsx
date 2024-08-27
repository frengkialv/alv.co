import * as React from "react";
import { SVGProps } from "@/type";
import styled from "styled-components";

const SVGComponent = ({
  width = "210px",
  height,
  color = "#FFFFFF",
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      xmlns="http://www.w3.org/2000/svg"
      width={153}
      height={41.555}
      viewBox="0 0 37.668 10.234"
      {...props}
    >
      <path
        fill={color}
        d="M11.327 1.196c-0.131 0.878 -0.393 3.009 0.168 5.121 0.112 0.28 0.393 0.206 0.505 0.075 0.037 -0.056 0.411 -0.411 0.411 -0.411 0.131 -0.187 0.262 -0.131 0.355 0s0.355 0.542 0.748 0.561c0.392 0.019 1.009 -0.449 1.252 -0.636 0.168 0.318 0.374 0.617 0.71 0.598 0.336 -0.019 0.654 -0.262 0.935 -0.561 0.206 0.243 0.43 0.505 0.692 0.486s0.748 -0.299 1.215 -0.729c0.187 -0.206 0.393 -0.112 0.523 0.093s0.318 0.542 0.561 0.542 0.598 -0.336 0.71 -0.43c0.112 -0.093 0.224 -0.168 0.355 -0.019l0.28 0.262c0.168 0.168 0.523 0.131 0.785 -0.112s0.318 -0.318 0.43 -0.318c0.112 0 0.168 0.15 0.28 0.262s0.972 0.86 2.112 -0.299c0.019 0.58 -0.112 3.832 -0.112 4.299 0 0.224 0.262 0.299 0.636 0.224 0.374 -0.075 0.561 -0.187 0.542 -0.729 -0.019 -0.542 -0.093 -3.215 -0.093 -3.215 0.056 -0.43 0.43 -1.14 0.822 -1.159 0.393 -0.019 0.206 0.467 0.019 0.467s-0.393 0.093 -0.393 0.262 0.056 0.654 1.159 0.654c1.103 0 1.234 -0.355 1.533 -0.486 0.187 0.355 0.748 0.916 2.299 -0.075 0.318 0.374 0.916 0.841 1.57 0.374 0.206 -0.168 0.411 -0.561 0.336 -0.897 -0.056 -0.131 -0.019 -0.187 0.075 -0.187h0.617c0.131 0 0.355 0.093 0.43 0.467 0.075 0.374 0.336 0.692 0.542 0.673 0.206 -0.019 0.598 -0.336 0.822 -0.561 0.187 0.262 0.991 1.477 2.467 -0.561 0.131 -0.187 -0.075 -0.28 -0.187 -0.15 -0.112 0.131 -0.449 0.336 -0.729 0.355 -0.28 0.019 -0.617 -0.262 -0.878 -0.617s-0.561 -0.224 -0.748 0.056c-0.131 0.15 -0.206 0.299 -0.355 0.467 -0.093 -0.168 -0.206 -0.523 -0.392 -0.654s-0.336 -0.15 -0.785 -0.037 -0.953 0.168 -1.458 0.187c-0.28 -0.019 -0.206 0.112 -0.187 0.224s0.224 0.579 -0.15 0.598c-0.374 0.019 -0.336 -0.542 -0.075 -0.841 0.131 -0.131 -0.056 -0.411 -0.262 -0.299s-0.336 0.168 -0.505 0.43c-0.168 0.262 -0.523 0.654 -1.103 0.673s-0.411 -0.654 -0.393 -0.953c0 -0.168 -0.112 -0.318 -0.411 -0.243s-0.692 0.037 -0.654 0.86c-0.206 0.299 -0.673 0.486 -1.047 0.43 -0.112 -0.019 -0.15 -0.075 -0.112 -0.206 0.037 -0.131 0.131 -0.86 -0.43 -1.047 -0.561 -0.187 -0.991 0.075 -1.271 0.318 -0.15 0.075 -0.187 0 -0.187 -0.131l0.019 -0.692c0 -0.318 -0.636 -0.393 -0.729 -0.019s-0.206 1.103 -0.766 1.365 -0.748 -0.075 -1.047 -0.449 -0.598 -0.355 -0.935 -0.019l-0.336 0.318c-0.131 0.112 -0.206 0.075 -0.318 -0.094 -0.112 -0.168 -0.187 -0.393 -0.393 -0.411s-0.243 0.056 -0.393 0.168l-0.43 0.336c-0.168 0.131 -0.206 0.131 -0.374 -0.094 0 0 -0.28 -0.467 -0.561 -0.467 -0.28 0 -0.374 0.168 -0.542 0.299 0 0 -0.43 0.299 -0.579 0.43 -0.15 0.131 -0.579 0.393 -0.991 -0.224 -0.15 -0.224 -0.411 -0.393 -0.598 -0.075 -0.187 0.318 -0.486 0.804 -0.71 0.654s0.15 -0.579 0.43 -0.617c0.28 -0.037 0.112 -0.393 -0.168 -0.411s-0.729 0.168 -0.935 0.411c-0.206 0.243 -0.542 0.523 -0.878 0.505 -0.336 -0.019 -0.411 -0.28 -0.579 -0.636s-0.467 -0.318 -0.692 -0.131 -0.28 0.243 -0.449 0.449c-0.168 0.206 -0.168 0.093 -0.187 -0.037 -0.019 -0.131 -0.131 -2.542 0.056 -4.093 0.075 -0.392 -0.729 -0.523 -0.897 0.075"
      />
      <path
        fill={color}
        d="M29.009 4.077c0.321 0 0.582 -0.26 0.582 -0.582s-0.26 -0.582 -0.582 -0.582 -0.582 0.26 -0.582 0.582 0.26 0.582 0.582 0.582m-18.617 0.596c-0.075 0.056 -2.187 0.766 -3.346 0.841V1.178c0.673 0.019 1.944 0.299 2.748 0.598 0.187 0.093 0.579 -0.019 0.168 -0.43C9.009 0.579 7.514 0 5.533 0S0 1.103 0 3.346s2.841 3.364 5.551 3.364c1.907 0 3.682 -0.692 4.972 -1.925 0.206 -0.206 -0.056 -0.168 -0.131 -0.112M3.981 5.511C2.368 5.178 1.224 4.343 1.224 3.364c0 -0.978 1.145 -1.813 2.757 -2.146zM36.793 4.111c-0.151 0 -0.273 0.119 -0.273 0.263 0 0.148 0.122 0.266 0.273 0.266 0.15 0 0.272 -0.119 0.272 -0.266 0 -0.145 -0.122 -0.263 -0.272 -0.263m0 0.478c-0.123 0 -0.221 -0.094 -0.221 -0.215 0 -0.117 0.098 -0.212 0.221 -0.212 0.121 0 0.22 0.094 0.22 0.212 0 0.121 -0.098 0.215 -0.22 0.215"
      />
      <path d="M36.933 4.306c0 -0.025 -0.011 -0.051 -0.034 -0.064 -0.023 -0.013 -0.049 -0.014 -0.074 -0.014h-0.133v0.296h0.045V4.387h0.053l0.087 0.137h0.052l-0.092 -0.137c0.054 -0.001 0.096 -0.023 0.096 -0.082m-0.146 0.045h-0.05v-0.089h0.079c0.038 0 0.072 0.005 0.072 0.043 0 0.053 -0.059 0.046 -0.101 0.046" />
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

export default SVGComponent;
