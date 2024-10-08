import * as React from "react";
import { SVGProps } from "react";

const UpgradeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5303 4.46967C10.2374 4.17678 9.76256 4.17678 9.46967 4.46967L4.6967 9.24264C4.40381 9.53553 4.40381 10.0104 4.6967 10.3033C4.98959 10.5962 5.46447 10.5962 5.75736 10.3033L10 6.06066L14.2426 10.3033C14.5355 10.5962 15.0104 10.5962 15.3033 10.3033C15.5962 10.0104 15.5962 9.53553 15.3033 9.24264L10.5303 4.46967ZM6 16.25C5.58579 16.25 5.25 16.5858 5.25 17C5.25 17.4142 5.58579 17.75 6 17.75V16.25ZM10.75 13V5H9.25V13H10.75ZM9.25 13C9.25 14.7949 7.79493 16.25 6 16.25V17.75C8.62335 17.75 10.75 15.6234 10.75 13H9.25Z"
      fill="black"
    />
    <path d="M4 3H16" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export default UpgradeLogo;
