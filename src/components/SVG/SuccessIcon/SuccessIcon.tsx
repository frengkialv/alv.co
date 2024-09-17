import * as React from "react";
import { SVGProps } from "react";

const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.109 8.331 -4.903 4.914 -1.886 -1.886a1.142 1.142 0 1 0 -1.611 1.611l2.685 2.697a1.143 1.143 0 0 0 1.611 0l5.715 -5.715a1.143 1.143 0 1 0 -1.611 -1.623M12 0.572a11.428 11.428 0 1 0 0 22.857A11.428 11.428 0 0 0 12 0.572m0 20.571a9.142 9.142 0 1 1 0 -18.285 9.142 9.142 0 0 1 0 18.285"
      fill="#6FCF97"
    />
  </svg>
);
export default SuccessIcon;
