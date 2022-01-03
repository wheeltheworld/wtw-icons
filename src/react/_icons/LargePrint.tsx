import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LargePrint: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 31 30"
    >
     <g clipPath="url(#clip0_10728_2369)">
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clipPath="url(#clip1_10728_2369)"
        >
          <path d="M7.952 28.552h7.983M11.698 28.393V1.489M11.964 3.162h11M14.321 3.162v19.764h7.072V3.162"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_10728_2369">
          <path fill="currentColor" d="M0 0H30V30H0z" transform="translate(.5)"></path>
        </clipPath>
        <clipPath id="clip1_10728_2369">
          <path
            fill="currentColor"
            d="M0 0H16.5V29.25H0z"
            transform="translate(7.25)"
          ></path>
        </clipPath>
      </defs>
    </Icon>
);

export default LargePrint;
