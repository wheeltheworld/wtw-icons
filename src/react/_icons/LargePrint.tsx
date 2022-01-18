import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LargePrint: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
     <g clipPath="url(#clip0_1585_196)">
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clipPath="url(#clip1_1585_196)"
        >
          <path d="M5.961 22.841h6.387M8.958 22.714V1.19M9.171 2.53h8.8M11.057 2.53v15.81h5.657V2.53"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1585_196">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
        <clipPath id="clip1_1585_196">
          <path
            fill="currentColor"
            d="M0 0H13.2V23.4H0z"
            transform="translate(5.4)"
          ></path>
        </clipPath>
      </defs>
    </Icon>
);

export default LargePrint;
