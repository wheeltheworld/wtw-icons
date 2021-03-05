import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Tea: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                d="M9,7V6a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5V18"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <rect
                x="16"
                y="18"
                width="6"
                height="5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <polyline
                points="12 23 2 23 2 11 5 7 13 7 16 11 16 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="7"
                y1="11"
                x2="11"
                y2="11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Tea;
