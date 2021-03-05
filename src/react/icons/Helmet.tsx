import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Helmet: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                d="M14,17c-2,0-3-2-5-2H1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M4,15V11.5A9.5,9.5,0,0,1,13.5,2h0A9.5,9.5,0,0,1,23,11.5V15a2,2,0,0,1-2,2H20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="17"
                y1="15"
                x2="17"
                y2="23"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle
                cx="17"
                cy="14"
                r="1"
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

export default Helmet;
