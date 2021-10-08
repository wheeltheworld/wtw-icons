import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WheelchairUser: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
          <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
        transform="translate(.5 .5)"
      >
        <circle cx="11" cy="3" r="2" strokeLinejoin="round"></circle>
        <circle
          cx="20"
          cy="22"
          r="1"
          data-cap="butt"
          data-color="color-2"
        ></circle>
        <path
          strokeLinejoin="round"
          d="M7.763 13.551A4.991 4.991 0 1015 18"
          data-color="color-2"
        ></path>
        <path
          d="M20 18v-2a1 1 0 00-1-1h-6.265a2 2 0 01-1.98-1.717L10 8"
          data-cap="butt"
        ></path>
        <path
          strokeLinejoin="round"
          d="M14.571 12l-.448-3.141a1 1 0 00-.99-.859H10.1l-.2.019-4.42.881a1 1 0 00-.7.533L3 13"
        ></path>
      </g>
    </Icon>
);

export default WheelchairUser;
