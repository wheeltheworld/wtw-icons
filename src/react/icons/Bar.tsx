import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Bar: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M23.62,9.89a7.24,7.24,0,1,1,7.24,7.24A8.11,8.11,0,0,1,26,15.32"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="8.42"
                y1="17.13"
                x2="24.34"
                y2="17.13"
            />
            <polygon
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="30.86 9.89 16.38 26.18 1.9 9.89 30.86 9.89"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="16.38"
                y1="26.18"
                x2="16.38"
                y2="38.85"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="7.33"
                y1="38.85"
                x2="25.43"
                y2="38.85"
            />
        </g>
    </Icon>
);

export default Bar;
