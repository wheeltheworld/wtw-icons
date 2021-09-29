import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ShowerWheelchair: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        clipPath="url(#clip0)"
        fill="none"
      >
        <path
          strokeLinejoin="round"
          d="M3 7.5h6.8c0-1.9-1.5-3.4-3.4-3.4S3 5.6 3 7.5z"
        ></path>
        <path
          strokeLinejoin="round"
          d="M1 15.4v-12C1 1.9 2.2.7 3.7.7c1.5 0 2.7 1.2 2.7 2.7v.7M8.5 10.5v-.7M6.4 11.8v-.7M4.4 10.5v-.7"
        ></path>
        <path
          strokeMiterlimit="10"
          d="M9.7 20.1v-2.9c0-.8.7-1.5 1.5-1.5h4.1M11.9 11.3H20M23 7.6h-2.2l-1.4 6.7"
        ></path>
        <path
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M18.6 23a4.4 4.4 0 100-8.8 4.4 4.4 0 000 8.8z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M18.6 20.1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.7 23.1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default ShowerWheelchair;
