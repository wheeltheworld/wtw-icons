import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TransportationColor: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M1 13H23V20H1z"></path>
      <path fill={props.fill} d="M3 20H8V23H3z"></path>
      <path fill={props.fill} d="M16 20H21V23H16z"></path>
      <g
        fill="none"
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        clipPath="url(#clip0_856_21777)"
      >
        <path d="M23 13.1H1M7.6 19.7V23H3.2v-3.3M20.8 19.7V23h-4.4v-3.3"></path>
        <path d="M23 3.2v16.5H1V3.2A2.2 2.2 0 013.2 1h17.6A2.2 2.2 0 0123 3.2zM8.7 4.3h6.6M5.4 16.4h2.2M16.4 16.4h2.2"></path>
      </g>
      <defs>
        <clipPath id="clip0_856_21777">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default TransportationColor;
