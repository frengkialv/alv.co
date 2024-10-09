import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/types/common";

const EmptyDataIcon = ({
  width = "610px",
  height,
  color,
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      width={270}
      height={127}
      viewBox="0 0 270 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M59.2422 114.628C59.2422 114.628 57.7956 110.673 55.943 105.533H55.8615V105.305C54.1464 100.548 52.1004 94.8297 50.5371 90.3061V105.484H44.3031V83.9428H48.4111C48.2513 83.4306 48.149 83.0413 48.0994 82.7988C47.8357 81.5223 48.1474 80.7245 48.6046 80.0527H30.4941V126.326H65.083V125.445C61.2099 123.602 60.1054 116.953 59.2422 114.628ZM39.1018 105.533H32.8678V83.9923H39.1018V105.533Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5356 109.208V107.191H44.3081V109.208H50.5356Z"
        fill="#6D6D6D"
      />
      <path
        d="M55.8616 109.254V107.237H56.453L57.0077 109.254H55.8616Z"
        fill="#6D6D6D"
      />
      <path
        d="M39.1001 109.254V107.237H32.8725V109.254H39.1001Z"
        fill="#6D6D6D"
      />
      <path
        d="M47.3034 120.51C48.511 120.51 49.4901 119.532 49.4901 118.327C49.4901 117.121 48.511 116.144 47.3034 116.144C46.0957 116.144 45.1167 117.121 45.1167 118.327C45.1167 119.532 46.0957 120.51 47.3034 120.51Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.6439 119.632C60.4065 119.969 60.0784 120.232 59.6975 120.391C59.3167 120.549 58.8986 120.597 58.4917 120.529C58.0847 120.46 57.7055 120.278 57.3979 120.003C57.0903 119.729 56.8667 119.373 56.7531 118.977C56.6396 118.581 56.6406 118.161 56.7561 117.765C56.8715 117.37 57.0968 117.015 57.4058 116.742C57.7147 116.469 58.0948 116.289 58.502 116.222C58.9093 116.156 59.3271 116.205 59.7072 116.366"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.8664 120.558C37.074 120.558 38.053 119.58 38.053 118.375C38.053 117.169 37.074 116.192 35.8664 116.192C34.6587 116.192 33.6797 117.169 33.6797 118.375C33.6797 119.58 34.6587 120.558 35.8664 120.558Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5371 90.5375V105.492H44.3096V83.946H48.2545"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.112 89.0711H44.9075"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.112 91.4438H44.9075"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.112 93.8165H44.9075"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.1001 105.538V83.994H32.8726V105.538H39.1001Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6798 98.9895H33.3218"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6798 86.7463H33.3218"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6798 101.362H33.3218"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6798 103.735H33.3218"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.5379 62.2952C54.2489 61.4829 53.8206 60.727 53.272 60.0613C51.2867 57.6471 51.2627 56.1138 50.1438 54.9569C49.0249 53.8001 47.249 54.3283 48.8475 58.2519C49.1 58.871 49.3297 59.4332 49.5364 59.9384"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.3074 59.6576C47.9346 59.6815 53.3405 60.0884 56.3105 64.5131"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.3972 63.1265C49.8339 62.4021 58.4175 61.6458 60.1023 71.5832"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.6977 74.5606C51.2293 72.9347 50.6763 71.3933 50.0737 70.4535C48.3058 67.6963 44.3576 67.9005 44.3576 67.9005C44.3576 67.9005 34.3194 59.0146 32.8664 57.4094C31.4134 55.8042 31.9696 54.274 34.5671 56.0579C35.9082 56.9786 38.64 58.93 40.9609 60.607"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.1865 67.5048C44.1865 67.5048 39.0315 56.0723 38.2595 53.9182C37.4874 51.7641 38.5312 50.628 40.2847 53.4858C41.0456 54.7272 42.23 56.677 43.3218 58.4912"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.6988 66.5906C43.6988 66.5906 43.288 56.7839 43.2896 54.8835C43.2896 51.7513 45.1741 50.861 45.6601 55.083C45.9797 57.9024 46.3426 63.0994 46.3426 63.0994"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M192.14 62.4755C192.43 61.5968 192.881 60.7794 193.469 60.0645C195.456 57.6487 195.476 56.1137 196.6 54.9585C197.724 53.8033 199.493 54.3298 197.895 58.2535C197.625 58.9204 197.38 59.5214 197.16 60.0565"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M200.569 59.656C199.148 59.656 193.638 59.9496 190.553 64.336"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M200.307 63.1185C196.846 62.3973 188.318 61.6825 186.638 71.5753"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M195.161 74.1522C195.604 72.6794 196.12 71.312 196.667 70.4503C198.435 67.6931 202.383 67.8973 202.383 67.8973C202.383 67.8973 212.418 59.013 213.874 57.4078C215.331 55.8026 214.771 54.2724 212.174 56.0563C210.797 57.0009 207.959 59.0337 205.594 60.7346"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M202.554 67.5048C202.554 67.5048 207.709 56.0723 208.481 53.9182C209.253 51.7641 208.21 50.628 206.458 53.4858C205.681 54.7495 204.466 56.752 203.353 58.5917"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M203.352 58.6141C203.409 56.9435 203.452 55.4994 203.451 54.8835C203.451 51.7513 201.566 50.861 201.08 55.083C200.761 57.9024 200.399 63.0994 200.399 63.0994"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M203.042 66.5905C203.042 66.5905 203.231 62.1069 203.352 58.6125"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M101.658 50.1238C93.727 54.0793 91.2238 60.2815 92.0566 66.7421H91.9798C91.9798 66.7421 81.5484 66.6033 75.7044 83.9333C73.9925 79.9123 72.255 75.9775 71.5085 74.7457C69.8094 71.9502 64.0086 73.206 62.4933 71.2641C60.9779 69.3222 60.4409 68.7111 60.4409 68.7111C60.4409 68.7111 55.9332 74.082 50.3035 73.4804C50.3035 73.4804 49.9838 74.4473 50.198 76.8886C50.4122 79.3299 47.4375 79.6092 48.1008 82.802C48.7642 85.9948 59.2372 114.628 59.2372 114.628C60.2251 117.29 61.5294 125.617 66.9418 125.914C66.9565 125.953 66.9821 125.986 67.0155 126.011C67.049 126.036 67.0889 126.05 67.1304 126.053C75.7124 126.029 180.654 126.117 180.654 126.117C180.654 126.117 180.663 126.003 180.675 125.789C185.35 124.688 186.562 117.138 187.494 114.628C187.494 114.628 197.968 85.9948 198.63 82.802C199.292 79.6092 196.322 79.3299 196.534 76.8886C196.747 74.4473 196.427 73.4804 196.427 73.4804C190.804 74.074 186.295 68.7127 186.295 68.7127C186.295 68.7127 185.758 69.319 184.244 71.2657C182.73 73.2123 179.856 71.0136 178.159 73.8091C176.787 76.0685 171.925 87.9095 170.107 92.3693C164.593 75.9967 157.497 67.6772 145.921 65.5837C145.162 60.9915 143.137 55.7787 138.01 51.9907"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M196.3 76.5312C196.701 73.9782 196.493 72.9953 196.493 72.9953C191.356 74.1043 186.608 68.2739 186.608 68.2739C186.608 68.2739 186.069 68.9505 184.53 71.1014C184.092 71.7572 183.418 72.2199 182.647 72.3938C184.78 79.322 194.065 80.2123 197.546 80.2953C197.287 78.7842 195.996 78.4699 196.3 76.5312Z"
        fill="#111111"
      />
      <path
        d="M50.1342 76.5185C49.733 73.9655 50.2477 72.9953 50.2477 72.9953C55.3867 74.1043 60.1341 68.2739 60.1341 68.2739C60.1341 68.2739 60.9077 68.3601 62.4438 70.5078C63.0624 71.3742 64.1254 72.1034 64.7664 72.2805C62.634 79.2071 51.9548 80.1469 48.4734 80.2315C48.7355 78.7252 50.4379 78.4587 50.1342 76.5185Z"
        fill="#111111"
      />
      <path
        d="M92.4354 66.423C89.3121 67.0612 85.6372 68.4813 82.7744 71.6518C85.439 75.5005 95.1816 88.8079 112.346 91.597C112.332 91.4782 112.306 91.3611 112.269 91.2476C102.753 87.3399 93.4409 76.5057 92.4354 66.423Z"
        fill="#111111"
      />
      <path
        d="M145.288 64.6535C145.883 68.1989 145.72 71.3822 145.64 73.2618C145.376 79.4751 143.092 83.7657 141.337 86.858L141.001 89.0807C148.25 87.375 154.276 75.8371 155.246 69.2345C152.673 67.8351 151.592 65.9268 145.288 64.6535Z"
        fill="#111111"
      />
      <path
        d="M112.147 87.1293C112.147 87.1293 119.037 98.9943 119.751 106.489"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M140.064 86.8341C140.064 86.8341 137.155 98.5092 137.943 105.997"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75.519 83.3046L82.9902 100.761"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M170.363 91.8858L165.272 101.815"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M97.8718 113.494C97.8718 113.494 97.2324 126.485 90.4294 126.182"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135.926 92.1124C139.585 81.3037 138.164 67.7394 135.693 65.7736C135.196 65.3795 133.701 65.0795 131.629 64.8513C130.763 64.7572 130.085 65.3859 130.085 65.3859L133.158 65.8645C131.788 78.9677 125.929 83.0972 125.929 83.0972C116.382 72.089 105.706 64.7093 105.706 64.7093L106.473 64.1812L105.93 64.1891L101.024 65.8757C101.024 65.8757 119.702 83.1977 125.232 114.805C126.1 119.761 126.687 123.656 127.077 126.712L136.535 126.158C135.117 115.191 133.608 98.9735 135.926 92.1124Z"
        fill="#111111"
      />
      <path
        d="M110.022 57.6934L109.782 61.9042L105.706 64.7093C105.706 64.7093 116.382 72.089 125.929 83.1115C125.929 83.1115 131.788 78.9773 133.158 65.8789L130.085 65.4002"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104.719 42.559C103.068 43.0281 99.6715 44.5391 101.043 48.8393C102.231 52.5619 105.544 51.9811 107.633 51.1737"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135.865 27.0879C137.449 33.4895 137.91 40.4911 137.889 45.8986L135.865 27.0879Z"
        fill="white"
      />
      <path
        d="M135.865 27.0879C137.449 33.4895 137.91 40.4911 137.889 45.8986"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M108.124 41.0033C109.288 41.9431 112.785 47.7448 113.795 50.5227C113.795 50.5227 120.44 47.3044 130.336 45.988C130.336 45.988 135.755 45.463 137.985 45.8683C137.985 45.8683 138.677 56.0467 134.896 61.8053C131.116 67.5639 121.68 67.1905 116.973 64.5498C112.266 61.909 111.378 60.4937 109.985 57.2403C108.591 53.9868 104.491 41.7277 104.491 41.7277L108.124 41.0033Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.554 43.4956C105.554 43.4956 102.061 39.1795 100.372 34.4692C98.7733 30.0414 100.33 25.0264 104.254 22.5021C107.538 20.3911 110.268 21.4315 110.268 21.4315C110.268 21.4315 105.859 15.4862 110.762 9.21386C111.612 8.12124 112.679 7.21511 113.896 6.55189C115.112 5.88867 116.453 5.48256 117.833 5.35886C124.615 4.77646 127.358 10.3324 127.358 10.3324C127.358 10.3324 133.076 -3.99463 148.813 2.26816C150.4 2.9064 152.337 4.94879 153.316 6.36569C159.249 14.9597 144.321 27.6863 136.011 29.5212C126.884 31.5349 121.305 30.6095 118.073 28.6628C120.437 29.7542 119.529 44.0589 105.554 43.4956Z"
        fill="#111111"
      />
      <path
        d="M129.51 39.6071L131.517 48.3096L128.936 48.8952"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132.935 43.1C133.427 43.0451 133.756 42.3744 133.669 41.6019C133.583 40.8295 133.114 40.2478 132.622 40.3028C132.129 40.3577 131.801 41.0284 131.887 41.8009C131.974 42.5733 132.443 43.155 132.935 43.1Z"
        fill="#111111"
      />
      <path
        d="M124.413 43.6668C124.905 43.6118 125.234 42.9411 125.147 42.1687C125.061 41.3963 124.592 40.8146 124.099 40.8696C123.607 40.9245 123.278 41.5952 123.365 42.3676C123.451 43.1401 123.921 43.7217 124.413 43.6668Z"
        fill="#111111"
      />
      <path
        d="M121.095 40.0013C121.095 40.0013 124.742 39.7843 124.695 37.3525"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M131.589 33.8725C131.589 33.8725 133.987 32.9295 134.837 34.9049"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128.718 52.7757C127.438 53.0095 126.136 53.0957 124.836 53.0326C124.037 52.9991 123.431 53.4921 123.667 53.99C124.081 54.8644 125.071 55.9047 127.42 55.6319C129.735 55.3574 130.197 54.29 130.192 53.4682C130.189 52.9736 129.442 52.6337 128.718 52.7757Z"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150.058 106.388C149.72 106.388 149.39 106.488 149.11 106.676C148.829 106.863 148.61 107.129 148.481 107.44C148.352 107.752 148.318 108.094 148.384 108.425C148.45 108.755 148.612 109.059 148.851 109.297C149.09 109.536 149.394 109.698 149.725 109.764C150.056 109.83 150.399 109.796 150.711 109.667C151.023 109.538 151.29 109.319 151.477 109.039C151.665 108.759 151.765 108.43 151.765 108.092C151.765 107.641 151.585 107.207 151.265 106.888C150.945 106.568 150.511 106.389 150.058 106.388Z"
        fill="#111111"
      />
      <path
        d="M144.561 118.376C144.108 118.376 143.674 118.556 143.354 118.875C143.034 119.195 142.854 119.628 142.854 120.08C142.854 120.532 143.034 120.966 143.354 121.285C143.674 121.605 144.108 121.784 144.561 121.784H144.569C145.022 121.783 145.455 121.603 145.775 121.282C146.094 120.962 146.273 120.528 146.272 120.076C146.271 119.624 146.09 119.191 145.769 118.873C145.448 118.554 145.014 118.375 144.561 118.376Z"
        fill="#111111"
      />
      <path
        d="M188.445 102.73H142.09V114.309L133.583 114.451L133.639 126.03L182.767 125.797L182.711 114.309H188.449L188.445 102.73ZM146.455 121.95C146.21 122.201 145.918 122.401 145.595 122.538C145.272 122.675 144.925 122.746 144.574 122.748H144.561C143.854 122.75 143.175 122.471 142.674 121.973C142.173 121.475 141.89 120.799 141.888 120.093C141.887 119.387 142.166 118.71 142.665 118.209C143.164 117.709 143.841 117.427 144.548 117.425H144.561C145.085 117.427 145.597 117.583 146.033 117.874C146.469 118.165 146.81 118.578 147.012 119.061C147.214 119.544 147.269 120.075 147.17 120.589C147.071 121.103 146.822 121.577 146.455 121.95ZM150.058 110.751C149.531 110.751 149.015 110.595 148.577 110.302C148.138 110.01 147.797 109.594 147.595 109.108C147.393 108.621 147.34 108.086 147.443 107.57C147.546 107.054 147.8 106.58 148.173 106.207C148.546 105.835 149.021 105.582 149.538 105.479C150.055 105.376 150.591 105.429 151.078 105.63C151.565 105.832 151.982 106.173 152.275 106.611C152.568 107.048 152.724 107.563 152.724 108.089C152.724 108.795 152.443 109.473 151.943 109.972C151.444 110.472 150.765 110.753 150.058 110.754V110.751ZM157.492 122.959L157.462 116.736L159.482 116.726L159.511 122.949L157.492 122.959ZM159.994 105.099H162.014V111.322H159.994V105.099ZM160.416 122.944L160.386 116.722L181.965 116.619L181.995 122.842L160.416 122.944ZM184.5 111.316H162.921V105.093H184.5V111.316Z"
        fill="#111111"
      />
      <path
        d="M176.861 122.158L176.838 117.539"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M174.484 122.169L174.461 117.55"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M172.107 122.18L172.084 117.561"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M169.477 110.537V105.918"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M181.742 110.537V105.918"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M167.101 110.537V105.918"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M164.724 110.537V105.918"
        stroke="#6D6D6D"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M237.09 85.8416H179.682V126.262H237.09V85.8416Z"
        fill="#6D6D6D"
      />
      <path d="M211.892 85.9342V126.493V85.9342Z" fill="#6D6D6D" />
      <path
        d="M211.892 85.9342V126.493"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M204.164 90.3189H230.14"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M219.88 104.841H236.569"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M201.567 118.389H234.103"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M206.113 101.211H189.294"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M179.746 94.8569H189.943"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M179.682 113.527H199.618"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M179.596 94.9207C175.309 96.6057 179.725 99.4251 179.725 99.4251C179.725 99.4251 180.83 96.2339 186.479 94.9335L179.596 94.9207Z"
        fill="#6D6D6D"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M237.258 104.774C241.544 106.459 237.127 109.28 237.127 109.28C237.127 109.28 236.024 106.088 230.374 104.786L237.258 104.774Z"
        fill="#6D6D6D"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M194.749 113.556C194.749 113.556 184.802 115.429 185.048 121.271C185.048 121.271 177.075 118.351 179.773 113.556H194.749Z"
        fill="#6D6D6D"
        stroke="#111111"
        strokeWidth={0.960582}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M-0.0473633 126.212H269.291"
        stroke="#111111"
        strokeWidth={1.28078}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default EmptyDataIcon;
