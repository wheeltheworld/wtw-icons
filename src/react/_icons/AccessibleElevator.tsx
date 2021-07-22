import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const AccessibleElevator: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <circle cx="10.5" cy="2.5" r="1.5"></circle>
        <path fill="none" stroke="currentColor" d="M9 24L6 20 3 24 9 24z"></path>
        <path fill="none" stroke="currentColor" d="M21 20L18 24 15 20 21 20z"></path>
        <path d="M7.449 9.943A3.983 3.983 0 1012.62 16M18 17l-.811-3.243a1 1 0 00-.97-.757h-4.372a1 1 0 01-.986-.836L10 7h6"></path>
      </g>
    </Icon>
);

export default AccessibleElevator;
