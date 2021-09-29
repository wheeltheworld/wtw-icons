import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MeasuringTape: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
         <g
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        clipPath="url(#clip0)"
      >
        <path
          strokeLinecap="round"
          d="M39.357 29.445v8.9H4.63c-2.186 0-3.987-1.832-3.987-4.057v-7.853c0-6.545 5.145-11.78 11.576-11.78 6.43 0 11.575 5.366 11.575 11.91l-.128 11.519"
        ></path>
        <path d="M23.794 33.11h15.563M12.09 32.325c3.126 0 5.66-2.579 5.66-5.76 0-3.18-2.534-5.759-5.66-5.759-3.125 0-5.66 2.579-5.66 5.76 0 3.18 2.535 5.759 5.66 5.759z"></path>
        <path
          strokeLinecap="round"
          d="M34.984 34.812v-1.44M31.383 34.812v-1.44M27.524 34.812v-1.44"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="currentColor"
            d="M0 0H40V25H0z"
            transform="translate(0 14)"
          ></path>
        </clipPath>
      </defs>
    </Icon>
);

export default MeasuringTape;
