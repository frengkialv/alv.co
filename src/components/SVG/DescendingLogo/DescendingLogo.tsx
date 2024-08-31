import * as React from "react";
import { SVGProps } from "react";

const DescendingLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="#ffffff"
    width="20px"
    height="20px"
    viewBox="0 0 0.9 0.9"
    id="sort-descending"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="secondary"
      d="m0.402 0.273 -0.15 -0.15a0.037 0.037 0 0 0 -0.053 0l-0.15 0.15a0.037 0.037 0 0 0 0.053 0.053L0.188 0.24V0.713a0.037 0.037 0 0 0 0.075 0V0.24l0.086 0.086a0.037 0.037 0 0 0 0.053 0 0.037 0.037 0 0 0 0 -0.053"
      style={{
        fill: "rgb(255, 255, 255)",
      }}
    />
    <path
      id="primary"
      d="M0.75 0.675H0.375a0.037 0.037 0 0 1 0 -0.075h0.375a0.037 0.037 0 0 1 0 0.075m0 -0.188h-0.263a0.037 0.037 0 0 1 0 -0.075h0.263a0.037 0.037 0 0 1 0 0.075m0 -0.188h-0.188a0.037 0.037 0 0 1 0 -0.075h0.188a0.037 0.037 0 0 1 0 0.075"
      style={{
        fill: "rgb(255, 255, 255)",
      }}
    />
  </svg>
);
export default DescendingLogo;
