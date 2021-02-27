import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Bed: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="1.77"
                y1="38.85"
                x2="1.77"
                y2="10.67"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="1.77"
                y1="33.87"
                x2="38.23"
                y2="33.87"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M1.77,27.24h34a2.49,2.49,0,0,1,2.49,2.5v9.11"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                cx="10.05"
                cy="19.91"
                r="3.32"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M38.23,23.23H18.34V16.6H34.92a3.31,3.31,0,0,1,3.31,3.31Z"
            />
        </g>
    </Icon>
);

export default Bed;
