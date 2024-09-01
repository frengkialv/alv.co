import * as React from "react";
import { SVGProps } from "react";

const SettingLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 2.75C6.75 2.33579 6.41421 2 6 2C5.58579 2 5.25 2.33579 5.25 2.75V4.00879C3.43368 4.13698 2 5.65106 2 7.5V8.5C2 10.3489 3.43368 11.863 5.25 11.9912L5.25 17.25C5.25 17.6642 5.58579 18 6 18C6.41421 18 6.75 17.6642 6.75 17.25L6.75 11.9912C8.56632 11.863 10 10.3489 10 8.5V7.5C10 5.65106 8.56632 4.13698 6.75 4.00879V2.75ZM8.5 7.5C8.5 6.39543 7.60457 5.5 6.5 5.5H5.5C4.39543 5.5 3.5 6.39543 3.5 7.5V8.5C3.5 9.60457 4.39543 10.5 5.5 10.5H6.5C7.60457 10.5 8.5 9.60457 8.5 8.5V7.5Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 2.75L13.25 8.00879C11.4337 8.13698 10 9.65106 10 11.5V12.5C10 14.3489 11.4337 15.863 13.25 15.9912L13.25 17.25C13.25 17.6642 13.5858 18 14 18C14.4142 18 14.75 17.6642 14.75 17.25L14.75 15.9912C16.5663 15.863 18 14.3489 18 12.5V11.5C18 9.65106 16.5663 8.13698 14.75 8.00879L14.75 2.75C14.75 2.33579 14.4142 2 14 2C13.5858 2 13.25 2.33579 13.25 2.75ZM13.5 9.5C12.3954 9.5 11.5 10.3954 11.5 11.5V12.5C11.5 13.6046 12.3954 14.5 13.5 14.5H14.5C15.6046 14.5 16.5 13.6046 16.5 12.5V11.5C16.5 10.3954 15.6046 9.5 14.5 9.5H13.5Z"
      fill="black"
    />
  </svg>
);

export default SettingLogo;
