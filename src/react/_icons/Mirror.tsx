import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Mirror: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 1.2H8a2 2 0 00-2 2v13a2 2 0 002 2h8a2 2 0 002-2v-13a2 2 0 00-2-2z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 5.2l-7 7 1-1M12 14.2l6-6-1 1M3 1.2v22M21 1.2v22M3 21.2h18"
      ></path>
        </g>
    </Icon>
);

export default Mirror;
