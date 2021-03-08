import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Reception: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M22.17 7.85h15.62v8.61H22.17z"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                cx="12.25"
                cy="7.44"
                r="3.24"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M10.05 9.82a9.08 9.08 0 00-1.05.87c-1 .93-2.21 2.74-2.21 6.22v2.91M17.83 19.82v-2.91c0-3.48-1.2-5.29-2.21-6.22a9.82 9.82 0 00-1.17-.87M1.17 21h37.66M27.74 20.11v-3.65M32.1 20.11v-3.65M35.47 21v17.85h-31V21"
            />
        </g>
    </Icon>
);

export default Reception;
