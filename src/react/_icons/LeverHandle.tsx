import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LeverHandle: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 5H5v4h18V5zM5 19v-3"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 5V1H1v22h8V13"
      ></path>
        </g>
    </Icon>
);

export default LeverHandle;
