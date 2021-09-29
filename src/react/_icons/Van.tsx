import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Van: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
       <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        clipPath="url(#clip0)"
        fill="none"
      >
        <path d="M21.8 20.7c.8-.1 1.3-.8 1.3-1.6s0-1.3-.4-1.9c0-.1-.1-.1-.1-.1-.7-.9-1.8-1.5-3-1.5h-.5l-3.4-3.3c-.7-.6-1.5-1-2.4-1H2.7c-1 0-1.8.8-1.8 1.8v5.8c.2.9 1 1.7 2 1.7M7.5 20.7h9.7M18.8 15.6H1.3M10.7 11.4v3.9M15.5 18.2H9.3"></path>
        <path d="M5.2 23.4a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4zM19.3 23.4a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default Van;
