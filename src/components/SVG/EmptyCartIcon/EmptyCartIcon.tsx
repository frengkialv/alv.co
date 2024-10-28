"use client";
import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/types/common";

const EmptyCartIcon = ({
  width = "269",
  height = "134",
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      width={width}
      height={height}
      viewBox="0 0 269 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M192.681 79.2428H215.627C216.134 79.2428 216.62 79.4426 216.978 79.7982C217.337 80.1538 217.538 80.6361 217.538 81.139V98.3908C217.538 98.8937 217.337 99.376 216.978 99.7316C216.62 100.087 216.134 100.287 215.627 100.287H192.486"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M217.538 89.9122H192.681"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M211.366 79.3904V101.098"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M127.274 25.8842V8.35432C127.274 6.40383 128.055 4.53323 129.445 3.15403C130.836 1.77483 132.721 1 134.687 1H185.113C186.086 1 187.05 1.19024 187.95 1.55984C188.849 1.92945 189.666 2.47119 190.354 3.15412C191.043 3.83705 191.589 4.6478 191.961 5.54006C192.333 6.43232 192.525 7.38861 192.525 8.35432V124.759C192.525 126.709 191.744 128.58 190.354 129.959C188.964 131.337 187.079 132.112 185.113 132.112H134.687C132.721 132.112 130.836 131.338 129.446 129.959C128.056 128.58 127.274 126.71 127.274 124.759V97.097"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M130.86 97.8733V122.534C130.86 125.38 133.259 127.686 136.218 127.686H178.082C181.041 127.686 183.44 125.38 183.44 122.534V10.8291C183.44 7.98405 181.041 5.67737 178.082 5.67737H167.888V7.82789C167.882 8.16923 167.74 8.49442 167.493 8.73202C167.246 8.96962 166.914 9.10018 166.57 9.09501H147.727C147.383 9.10018 147.051 8.96962 146.804 8.73202C146.557 8.49442 146.415 8.16923 146.409 7.82789V5.67737H136.224C133.265 5.67737 130.866 7.98405 130.866 10.8291V27.2391"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M183.147 1C185.784 2.37717 187.573 5.06607 187.573 8.15503V99.658"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M183.682 124.063C168.86 123.868 165.37 121.981 156.098 113.003C146.826 104.024 135.324 104.56 131.338 105.002"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M131.576 30.8932C135.57 30.4471 146.832 27.1469 156.099 36.1178C165.277 45.0025 168.788 54.1296 183.249 54.494"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M167.257 94.0095C165.422 93.4147 162.31 92.2249 162.385 91.1511C162.497 89.6297 168.45 91.05 168.45 91.05L168.552 86.5006C168.552 86.5006 161.268 86.4872 156.737 87.5297L156.547 95.3332L160.164 96.3207C161.865 96.7749 163.381 97.744 164.501 99.0929C165.843 101.493 165.723 103.076 166.001 104.307C166.137 104.858 166.471 105.341 166.94 105.665C167.409 105.989 167.981 106.133 168.549 106.069V95.7615C168.546 95.3719 168.42 94.993 168.188 94.6785C167.956 94.3641 167.63 94.1301 167.257 94.0095Z"
        fill="#111111"
      />
      <path
        d="M106.572 121.27L106.189 125.097C106.067 126.556 105.406 127.918 104.333 128.922C102.33 130.112 100.846 130 99.7512 130.25C98.7513 130.479 98.2235 131.455 98.5369 132.5H109.331C109.331 132.5 109.908 126.954 111.335 127.054C112.762 127.154 113.702 132.75 113.702 132.75H117.934C117.934 132.75 115.717 125.268 113.518 121.331L106.572 121.27Z"
        fill="#111111"
      />
      <path
        d="M138.419 44.1846L133.604 43.6834V43.9273L133.653 44.131C132.491 46.9568 129.905 49.1341 126.402 49.3229C121.066 49.6115 122.567 43.6298 122.669 43.2818L122.55 42.9442L117.303 42.5248L121.026 73.4279L138.716 73.639C132.667 64.4599 136.509 56.24 138.419 44.1846ZM123.835 57.7644C123.81 57.6489 123.832 57.528 123.896 57.4284C123.96 57.3289 124.062 57.2588 124.178 57.2335L128.956 56.2028L132.805 48.7786C132.861 48.6769 132.955 48.6012 133.067 48.5674C133.18 48.5336 133.3 48.5445 133.404 48.5978C133.508 48.651 133.588 48.7425 133.625 48.8526C133.662 48.9627 133.654 49.0829 133.604 49.1876L129.659 56.7992C129.629 56.8573 129.587 56.9081 129.535 56.9482C129.484 56.9883 129.423 57.0166 129.359 57.0312L124.37 58.1095C124.339 58.1153 124.306 58.1183 124.274 58.1184C124.171 58.1182 124.071 58.083 123.992 58.0185C123.912 57.9541 123.856 57.8644 123.835 57.7644ZM134.849 65.3835C134.617 65.7386 134.312 66.042 133.955 66.2747C133.599 66.5074 133.197 66.6642 132.776 66.7354L124.571 68.0917C124.546 68.0938 124.521 68.0938 124.496 68.0917C124.437 68.0965 124.378 68.0897 124.321 68.0717C124.265 68.0537 124.213 68.0248 124.167 67.9868C124.122 67.9487 124.085 67.9022 124.058 67.8499C124.031 67.7976 124.015 67.7406 124.01 67.682C124.005 67.6234 124.012 67.5644 124.03 67.5085C124.048 67.4525 124.077 67.4006 124.115 67.3558C124.154 67.311 124.201 67.2741 124.253 67.2473C124.306 67.2204 124.364 67.2042 124.423 67.1994L132.626 65.8519C132.925 65.8024 133.21 65.6919 133.463 65.5276C133.716 65.3632 133.933 65.1486 134.098 64.8971C134.128 64.8423 134.168 64.7941 134.217 64.7556C134.266 64.7172 134.323 64.6893 134.383 64.6738C134.444 64.6583 134.507 64.6555 134.569 64.6656C134.631 64.6757 134.69 64.6984 134.742 64.7324C134.794 64.7664 134.839 64.8108 134.873 64.8629C134.907 64.9149 134.93 64.9735 134.94 65.0347C134.95 65.096 134.947 65.1587 134.931 65.2187C134.915 65.2788 134.887 65.3349 134.848 65.3835H134.849Z"
        fill="#111111"
      />
      <path
        d="M116.5 85.745L119.551 93.3893C119.956 94.2759 120.613 95.0261 121.442 95.5485C122.27 96.0708 123.233 96.3428 124.215 96.3311L156.369 102.726L156.773 86.0588L132.409 85.1665L131.36 73.6122"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M115.966 65.4534C115.966 65.4534 102.142 81.6924 100.795 85.4089C99.4468 89.1255 101.394 121.224 101.394 121.224L116.225 121.355L114.139 87.7766L134.44 70.7747L115.966 65.4534Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135.647 40.8206C136.447 40.4324 136.635 39.0478 136.065 37.7063C135.808 37.0576 135.364 36.4984 134.789 36.0986"
        stroke="#6D6D6D"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M133.358 26.1342C131.791 24.7615 131.193 18.0883 136.04 13.9702C140.946 9.80596 144.397 14.638 145.15 15.9036C145.903 17.1692 146.285 20.5259 142.099 23.3903C137.914 26.2547 135.146 27.7017 133.358 26.1342Z"
        fill="#111111"
      />
      <path
        d="M132.613 28.6819L134.061 27.1128C134.183 26.9841 134.279 26.8325 134.342 26.667C134.405 26.5014 134.434 26.325 134.428 26.1481C134.422 25.9712 134.381 25.7972 134.306 25.6363C134.232 25.4754 134.126 25.3307 133.995 25.2107L133.901 25.1289C133.623 24.8929 133.263 24.7745 132.899 24.7992C132.534 24.824 132.194 24.9899 131.952 25.2612L130.503 26.8288L132.613 28.6819Z"
        fill="#6D6D6D"
      />
      <path
        d="M132.477 36.408C132.717 36.5618 132.993 36.6527 133.279 36.6722C133.565 36.6918 133.851 36.6392 134.111 36.5195C134.53 36.3356 134.861 35.9974 135.033 35.5763C135.206 35.1552 135.208 34.684 135.037 34.2619C134.882 33.8998 134.601 33.6052 134.245 33.432C133.889 33.2589 133.482 33.2187 133.099 33.319"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M122.197 32.3805C121.787 32.2495 121.343 32.276 120.952 32.4549C120.535 32.6402 120.207 32.9784 120.035 33.3987C119.864 33.819 119.863 34.2887 120.033 34.7095C120.184 35.0608 120.453 35.3488 120.795 35.5237C121.137 35.6986 121.53 35.7494 121.906 35.6673"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M125.149 40.9381L125.249 43.4886L122.672 43.2804C122.57 43.6284 121.069 49.6101 126.405 49.3215C129.905 49.1327 132.494 46.9613 133.656 44.1296L131.59 43.8917L131.527 38.67"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132.854 35.1392C133.606 31.2327 131.81 27.6101 128.842 27.048C125.875 26.4859 122.859 29.197 122.108 33.1035C121.356 37.01 123.152 40.6326 126.119 41.1947C129.087 41.7568 132.102 39.0457 132.854 35.1392Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M133.551 27.8832C132.332 26.4451 130.355 25.4903 128.712 25.3267C118.444 23.5807 119.984 30.175 119.984 30.175L122.02 30.1125C121.502 31.4615 121.486 32.7494 122.02 33.5941C122.02 33.5778 122.02 33.5614 122.02 33.5451C122.192 32.3173 122.612 31.1366 123.255 30.0739L129.277 29.888C129.109 28.9956 129.755 28.6075 130.347 28.1554C130.331 28.5049 130.326 32.2943 133.008 33.4291C133.005 33.853 132.974 34.2764 132.914 34.6962C132.898 34.8137 132.878 34.9297 132.857 35.0457C133.024 35.0436 133.191 35.0332 133.356 35.0144C135.37 34.7601 135.439 30.1096 133.551 27.8832Z"
        fill="#111111"
      />
      <path
        d="M133.526 35.9172C132.703 36.286 132.503 37.687 133.076 39.0403C133.649 40.3937 134.79 41.1983 135.613 40.825L135.641 40.8116"
        stroke="#6D6D6D"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120.946 34.7348C120.123 35.1036 119.923 36.5046 120.497 37.858C121.023 39.0953 122.014 39.8717 122.808 39.7185"
        stroke="#6D6D6D"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M126.927 35.8145L125.678 35.7283L126.582 32.6364"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M129.96 31.3406C129.96 31.3406 129.061 30.4594 128.275 31.1423"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M125.767 30.9219C125.767 30.9219 124.604 30.4284 124.099 31.3379"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128.912 33.9808C129.142 33.9808 129.329 33.6952 129.329 33.3428C129.329 32.9904 129.142 32.7048 128.912 32.7048C128.681 32.7048 128.495 32.9904 128.495 33.3428C128.495 33.6952 128.681 33.9808 128.912 33.9808Z"
        fill="#111111"
      />
      <path
        d="M125.138 33.4769C125.173 33.1246 125.015 32.8211 124.787 32.7991C124.558 32.7771 124.345 33.045 124.311 33.3973C124.276 33.7497 124.434 34.0532 124.662 34.0751C124.891 34.0971 125.104 33.8293 125.138 33.4769Z"
        fill="#111111"
      />
      <path
        d="M126.168 38.032C126.168 38.032 127.667 38.9778 128.378 37.4728"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120.664 40.0382H112.247V29.7526H91.056V40.0382H87.4281C86.5303 40.0382 85.6693 40.392 85.0344 41.0218C84.3996 41.6516 84.043 42.5057 84.043 43.3964V44.3675C87.7699 44.0701 91.2524 46.4883 91.6032 46.6727C91.996 46.8779 92.0859 47.69 91.182 47.6855C90.278 47.681 87.2017 47.0326 87.2017 47.0326C88.5359 47.4788 91.5178 48.5198 91.7217 48.7667C92.035 49.1415 91.4893 49.8182 90.5793 49.5178L86.7654 48.2938C86.7654 48.2938 90.3799 50.193 90.6797 50.4621C90.9796 50.7313 89.5089 51.3946 87.8163 50.5216C86.1238 49.6486 85.9679 49.7334 85.9679 49.7334C85.9679 49.7334 88.7173 50.9767 89.0681 51.3024C89.419 51.6281 87.7309 52.2543 85.5901 51.5002C85.064 51.316 84.5477 51.1055 84.043 50.8697V71.4156C84.045 72.305 84.4025 73.1572 85.0371 73.7854C85.6717 74.4136 86.5316 74.7664 87.4281 74.7664H120.664C121.562 74.7664 122.422 74.4127 123.057 73.7832C123.692 73.1537 124.048 72.2999 124.048 71.4097V43.3964C124.048 42.9554 123.961 42.5188 123.791 42.1114C123.621 41.7039 123.372 41.3337 123.057 41.0219C122.743 40.71 122.37 40.4626 121.96 40.2939C121.549 40.1251 121.109 40.0382 120.664 40.0382ZM107.158 61.9376L103.98 62.8299C103.586 62.6113 103.168 62.3837 102.892 62.2231C102.225 61.8468 102.504 61.2356 103.265 61.1954C103.854 61.1597 105.952 61.6089 107.158 61.9376ZM111.732 67.6545C110.1 68.5572 107.823 68.0456 107.823 68.0456C106.174 69.6518 104.105 68.9275 104.418 68.5617C104.731 68.1958 107.34 66.6476 107.34 66.6476C107.34 66.6476 107.175 66.5792 105.581 67.6411C103.988 68.7029 102.442 68.2018 102.712 67.8998C102.982 67.5979 106.38 65.2972 106.38 65.2972L102.707 66.9421C101.833 67.3436 101.208 66.7279 101.48 66.3174C101.658 66.0497 104.521 64.6815 105.803 64.0866C105.803 64.0866 102.805 65.0771 101.896 65.1827C100.988 65.2883 100.997 64.4658 101.36 64.2175C101.723 63.9691 105.899 61.6981 110.242 62.0238L114.374 61.2936L116.212 67.1607L111.732 67.6545Z"
        fill="#6D6D6D"
      />
      <path
        d="M99.3838 29.9756V39.6292"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M93.6328 30.2374V33.0631H97.0239V30.3727"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M109.279 34.9296H105.466C104.916 34.9296 104.471 35.3718 104.471 35.9171V36.6712C104.471 37.2166 104.916 37.6587 105.466 37.6587H109.279C109.828 37.6587 110.274 37.2166 110.274 36.6712V35.9171C110.274 35.3718 109.828 34.9296 109.279 34.9296Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85.5902 51.5032C87.731 52.2572 89.419 51.6326 89.0682 51.3054C88.7174 50.9782 85.968 49.7364 85.968 49.7364C85.968 49.7364 86.1179 49.6516 87.8164 50.5246C89.515 51.3976 90.9797 50.7328 90.6798 50.4651C90.38 50.1974 86.7655 48.2938 86.7655 48.2938L90.5764 49.5148C91.4864 49.8122 92.0321 49.1385 91.7187 48.7638C91.5149 48.5184 88.533 47.4788 87.1988 47.0296C87.1988 47.0296 90.2765 47.6766 91.182 47.6825C92.0875 47.6885 91.9961 46.875 91.6033 46.6697C91.2105 46.4645 86.9124 43.4663 82.7283 44.5876C80.7344 45.4919 78.6206 49.0448 85.5902 51.5032Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95.7861 74.2904C96.6095 74.2976 97.402 73.9801 97.9895 73.4079C98.577 72.8356 98.9115 72.0554 98.9194 71.2386V43.2372C98.9115 42.4204 98.577 41.6402 97.9895 41.068C97.402 40.4957 96.6095 40.1783 95.7861 40.1854"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M114.374 61.288L110.242 62.0182C105.895 61.6925 101.729 63.962 101.36 64.2118C100.991 64.4617 100.991 65.2826 101.896 65.1771C102.802 65.0715 105.803 64.081 105.803 64.081C104.522 64.6759 101.658 66.0501 101.48 66.3118C101.21 66.7223 101.834 67.338 102.708 66.9364L106.38 65.2916C106.38 65.2916 102.98 67.5923 102.712 67.8942C102.444 68.1961 103.986 68.6958 105.581 67.6354C107.177 66.575 107.34 66.642 107.34 66.642C107.34 66.642 104.731 68.1902 104.418 68.556C104.105 68.9219 106.18 69.6462 107.823 68.04C107.823 68.04 110.1 68.5516 111.732 67.6488L116.212 67.1491L114.374 61.288Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M107.159 61.9377C105.959 61.609 103.861 61.1598 103.261 61.194C102.499 61.2342 102.22 61.8454 102.888 62.2217C103.163 62.3779 103.582 62.6099 103.976 62.8285"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M112.723 61.1523L113.813 68.1497C113.829 68.268 113.869 68.3819 113.929 68.4848C113.99 68.5878 114.071 68.6777 114.167 68.7494C114.263 68.8211 114.373 68.8731 114.489 68.9024C114.606 68.9317 114.727 68.9377 114.846 68.9201L132.547 65.9917C132.907 65.9324 133.251 65.7992 133.556 65.6008C133.862 65.4024 134.123 65.143 134.322 64.8391C136.271 61.8647 142.051 52.8596 142.648 49.7037C143.147 47.0713 140.423 44.0121 137.584 44.134C136.326 44.1876 129.542 57.061 129.542 57.061L113.527 60.0815C113.402 60.0966 113.281 60.1368 113.173 60.1994C113.064 60.2621 112.969 60.3461 112.894 60.4462C112.819 60.5463 112.765 60.6605 112.736 60.7819C112.706 60.9033 112.702 61.0293 112.723 61.1523Z"
        fill="#111111"
      />
      <path
        d="M75.4316 89.0645C75.4316 89.0645 80.7042 94.7456 79.0296 105.5"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.5588 94.8869V94.1567C57.5582 94.0523 57.5318 93.9496 57.4818 93.8577C57.4317 93.7658 57.3597 93.6876 57.272 93.6298C57.1843 93.5721 57.0837 93.5366 56.9789 93.5266C56.8741 93.5165 56.7685 93.5322 56.6713 93.5722L54.6699 94.3976C54.5797 94.4349 54.4993 94.4922 54.4348 94.5649C54.3702 94.6377 54.3232 94.7241 54.2974 94.8175C54.2715 94.911 54.2674 95.0091 54.2855 95.1043C54.3035 95.1996 54.3432 95.2895 54.4016 95.3673L54.9667 96.1109"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.2497 98.959L62.7264 101.959L72.1066 102.107C75.4827 101.959 78.5815 103.952 79.9862 107.191L87.7264 127.12C88.5569 128.712 88.6528 130.948 87.0263 131.73L86.7144 131.879C86.3713 132.057 85.9953 132.164 85.6092 132.193C85.2231 132.223 84.8349 132.174 84.4684 132.05C84.1018 131.926 83.7645 131.73 83.477 131.472C83.1894 131.215 82.9576 130.903 82.7956 130.554C82.7474 130.444 82.7054 130.332 82.6697 130.217L78.2712 113.88L76.2233 114.46L80.4554 130.494C80.4971 130.668 80.5036 130.848 80.4748 131.025C80.446 131.201 80.3823 131.37 80.2875 131.522C80.1926 131.674 80.0684 131.806 79.9221 131.911C79.7757 132.015 79.61 132.089 79.4345 132.13L77.1513 132.3C76.5865 132.341 76.026 132.175 75.5767 131.833C75.1275 131.491 74.8208 130.997 74.7152 130.445L71.7363 115.399L66.8281 115.368L66.5702 131.15C66.5748 131.349 66.5396 131.547 66.4666 131.733C66.3935 131.919 66.2842 132.088 66.1448 132.232C66.0055 132.375 65.8388 132.49 65.6545 132.569C65.4702 132.648 65.2719 132.691 65.0711 132.694L62.3921 132.744C62.1402 132.75 61.8901 132.701 61.6584 132.603C61.4267 132.505 61.2189 132.359 61.0486 132.175C60.8784 131.99 60.7497 131.772 60.6711 131.535C60.5926 131.297 60.566 131.046 60.5931 130.797L61.9963 115.083L59.9605 114.34L51.0525 129.063C50.9301 129.262 50.7685 129.433 50.5773 129.567C50.3861 129.702 50.1695 129.796 49.9404 129.845C49.7113 129.894 49.4747 129.896 49.2448 129.851C49.0148 129.807 48.7964 129.716 48.6028 129.585L46.6614 128.259C46.4593 128.122 46.2889 127.944 46.1613 127.736C46.0337 127.529 45.9519 127.297 45.9213 127.057C45.8907 126.816 45.912 126.571 45.9837 126.339C46.0555 126.107 46.1761 125.892 46.3376 125.71L56.4989 110.69L56.6863 101.133L51.3853 104.511C51.2348 104.608 51.0603 104.661 50.881 104.666C50.7017 104.671 50.5246 104.626 50.3693 104.537C50.2141 104.447 50.0868 104.317 50.0015 104.161C49.9162 104.004 49.8763 103.827 49.8861 103.65L50.0465 100.644C50.0749 100.123 50.236 99.6182 50.5147 99.176C50.7934 98.7339 51.1806 98.369 51.6401 98.1157L57.202 95.0491C57.5013 94.883 57.8423 94.8053 58.1846 94.825C58.527 94.8448 58.8565 94.9612 59.1344 95.1606"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.8268 100.037L64.3887 96.3608C64.5246 96.2513 64.6312 96.1103 64.6992 95.9503C64.7671 95.7903 64.7944 95.6161 64.7786 95.4432C64.7627 95.2702 64.7042 95.1038 64.6083 94.9586C64.5123 94.8134 64.3818 94.6938 64.2283 94.6103L61.0711 92.8956C60.9285 92.8182 60.77 92.7742 60.6077 92.7668C60.4454 92.7593 60.2835 92.7887 60.1344 92.8526C59.9852 92.9166 59.8527 93.0134 59.7469 93.1358C59.6412 93.2582 59.5649 93.4029 59.524 93.5589L58.1178 98.9501C58.0607 99.1664 58.0742 99.395 58.1562 99.6033C58.2382 99.8116 58.3845 99.9887 58.5742 100.109C58.764 100.23 58.9873 100.288 59.2123 100.275C59.4374 100.262 59.6524 100.179 59.8268 100.037Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.3616 97.2805C56.3764 96.9991 56.2321 96.763 56.0393 96.753C55.8465 96.7431 55.6782 96.9631 55.6635 97.2444C55.6487 97.5258 55.793 97.7619 55.9858 97.7719C56.1786 97.7818 56.3469 97.5618 56.3616 97.2805Z"
        fill="#111111"
      />
      <path
        d="M50.3662 102.534C50.3827 102.757 51.5655 102.832 52.0842 101.82"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.9046 99.756C51.9239 99.0556 51.496 98.4759 50.9489 98.4611C50.4018 98.4463 49.9427 99.0021 49.9235 99.7024C49.9043 100.403 50.3322 100.983 50.8792 100.997C51.4263 101.012 51.8854 100.456 51.9046 99.756Z"
        fill="#111111"
      />
      <path
        d="M77.0075 103.535C75.5758 102.54 73.8536 102.039 72.1067 102.112L64.2646 101.982C64.4056 102.759 65.1641 106.944 65.3141 107.772C65.4775 108.684 65.5239 110.62 68.4128 109.972C70.9449 109.405 74.9986 106.127 77.0075 103.535Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.059 99.008L54.6892 104.578C54.485 104.699 54.3343 104.892 54.2671 105.119C54.1999 105.345 54.221 105.588 54.3264 105.8L54.7762 106.71C54.8355 106.83 54.9198 106.936 55.0234 107.02C55.127 107.105 55.2475 107.167 55.3771 107.202C55.5067 107.237 55.6423 107.244 55.7749 107.223C55.9075 107.202 56.0342 107.154 56.1464 107.081L65.3797 101.072C65.4842 101.004 65.5741 100.916 65.6442 100.814C65.7143 100.711 65.7633 100.596 65.7882 100.474C65.8132 100.353 65.8136 100.227 65.7896 100.106C65.7655 99.984 65.7174 99.8682 65.6481 99.765L65.3317 99.2936C65.1971 99.093 64.9899 98.9514 64.7529 98.8982C64.516 98.8451 64.2675 98.8844 64.059 99.008Z"
        fill="#111111"
      />
      <path
        d="M111.857 66.9554L63.5107 101.062"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M111.434 60.4504L110.61 60.5746C110.376 60.6099 110.215 60.8268 110.251 61.059L111.342 68.1814C111.377 68.4136 111.596 68.5733 111.83 68.538L112.654 68.4138C112.888 68.3785 113.049 68.1616 113.014 67.9294L111.923 60.807C111.887 60.5747 111.669 60.4151 111.434 60.4504Z"
        fill="#111111"
      />
      <path
        d="M178.629 132.16H236.78C238.018 132.16 239.022 131.164 239.022 129.935V101.712C239.022 100.483 238.018 99.487 236.78 99.487H178.629C177.39 99.487 176.386 100.483 176.386 101.712V129.935C176.386 131.164 177.39 132.16 178.629 132.16Z"
        fill="#6D6D6D"
      />
      <path
        d="M197.617 99.9569C195.945 99.9569 194.59 101.078 194.59 102.46V129.664C194.59 131.046 195.939 132.167 197.617 132.167"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M188.19 110.231V102.026C188.19 100.623 189.54 99.4869 191.217 99.4869H185.547C183.876 99.4869 182.521 100.623 182.521 102.026V110.231H188.19Z"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M268 131.959L1 133"
        stroke="#111111"
        strokeWidth={0.900168}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  </Wrapper>
);

const Wrapper = styled.div<{ $width: string; $height: string | undefined }>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const SVGWrapper = styled.svg`
  min-width: 18px;
  width: 100%;
  height: 100%;
`;

export default EmptyCartIcon;