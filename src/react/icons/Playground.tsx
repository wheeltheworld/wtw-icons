import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Playground: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="15.11 24.16 21.63 24.16 33.05 38.85 37.95 38.85"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="23.26"
                y1="35.59"
                x2="23.26"
                y2="38.85"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                cx="8.58"
                cy="16.01"
                r="1.63"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="2.05 38.85 2.05 12.74 8.58 6.21 15.11 12.74 15.11 38.85"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="2.05"
                y1="24.16"
                x2="15.1"
                y2="24.16"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="2.05"
                y1="32.32"
                x2="15.1"
                y2="32.32"
            />
        </g>
    </Icon>
);

export default Playground;
