import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WrittenInformation: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
             <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M7 7L17 7"></path>
        <path d="M7 12L17 12"></path>
        <path d="M7 17L13 17"></path>
        <path d="M20 23H4a2 2 0 01-2-2V3a2 2 0 012-2h16a2 2 0 012 2v18a2 2 0 01-2 2z"></path>
      </g>
    </Icon>
);

export default WrittenInformation;
