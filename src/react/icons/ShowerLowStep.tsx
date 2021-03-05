import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const ShowerLowStep: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3,7.5h6.8c0-1.9-1.5-3.4-3.4-3.4S3,5.6,3,7.5z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1,23.2V3.4c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v0.7"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5,10.5V9.8"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.4,11.8v-0.7"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.4,10.5V9.8"
            />
        </g>
        <g>
            <g transform="translate(0.5 0.5)">
                <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="22.5,19.9 6.6,19.9 6.6,22.7"
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="5.4"
                y1="23.2"
                x2="23"
                y2="23.2"
            />
        </g>
    </Icon>
);

export default ShowerLowStep;
