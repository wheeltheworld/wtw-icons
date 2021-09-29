import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WheelchairUser: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M1.9 22.8V1.2h20.3v21.5"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.3 9.7H11c0-1.6-1.3-2.8-2.8-2.8-1.6-.1-2.9 1.2-2.9 2.8zM10.2 12.3v-.7M8.2 13.6v-.7M6.1 12.2v-.7M8.2 6.9V4.6M1.9 4.6h6.3"
      ></path>
        </g>
    </Icon>
);

export default WheelchairUser;
