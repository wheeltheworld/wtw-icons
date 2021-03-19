import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Baggage: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="5"
                y1="21"
                x2="5"
                y2="23"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="19"
                y1="21"
                x2="19"
                y2="23"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="9"
                y1="15"
                x2="15"
                y2="15"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M21,21H3V7c0-1.1,0.9-2,2-2 h14c1.1,0,2,0.9,2,2V21z"
                strokeLinejoin="round"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="15,5 15,1 9,1 9,5 "
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="3"
                y1="11"
                x2="21"
                y2="11"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Baggage;
