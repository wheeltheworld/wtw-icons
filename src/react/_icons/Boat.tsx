import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Boat: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="9.66 12.99 9.66 4.37 16.55 4.37 16.55 12.99"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="6.21 19.89 6.21 12.99 26.9 12.99 30.34 19.89"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="6.21 30.23 2.76 19.89 37.24 19.89 32.07 30.23"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M1,32a6.91,6.91,0,0,0,6.89,6.9,7.12,7.12,0,0,0,6-3.62,7.09,7.09,0,0,0,6,3.62,7.09,7.09,0,0,0,6-3.62,7.12,7.12,0,0,0,6,3.62A6.91,6.91,0,0,0,39,32"
            />
        </g>
    </Icon>
);

export default Boat;
