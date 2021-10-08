import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Heartbeat: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
         <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M1 11L8 11 10 8 14 14 16 11 23 11"></path>
        <path d="M5 14.2a58.932 58.932 0 007 7.8 58.932 58.932 0 007-7.8M22 7.429A5.458 5.458 0 0016.545 2 5.521 5.521 0 0012 4.443 5.521 5.521 0 007.455 2 5.458 5.458 0 002 7.429"></path>
      </g>
    </Icon>
);

export default Heartbeat;
