import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const BeachAccess: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M9.58 13.27l-.48-1.21M17.63 33.18L13 21.9M13.51 21.69l5-2.05L22.88 18a.56.56 0 00.3-.72l-.05-.1a11.54 11.54 0 00-13.21-3.91l-1 .41a10.83 10.83 0 00-6.21 11.76.57.57 0 00.66.45h.11l4.06-1.69 5-2.06zM8.38 23.82S6.62 16 9.58 13.27M18 19.86s-4.23-6.11-8.38-6.59M1.61 38.57s2.52-5 17.65-5.39c0 0 16.37-.12 19.13 5.67"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                cx="32.06"
                cy="13.23"
                r="3.85"
            />
        </g>
    </Icon>
);

export default BeachAccess;
