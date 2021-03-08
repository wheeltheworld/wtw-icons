import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Scooter: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5 0.5)">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M0.5,13.5v3.2c0,1.1,0.9,2,2,2"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M17.8,10.2l-2.5-7.5h-3"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="8.5,18.7 9.5,18.7 15.5,18.7 15.5,18.7 16.5,18.7 	"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="5.5"
                cy="18.7"
                r="3"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M21.4,16.3l-1.9-5.7l-4,0v3.8c0,1.1-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2v-0.6v-0.4h-9"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="19.5"
                cy="18.7"
                r="3"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="9.5,11.3 2.8,11.3 1,1.3"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="8"
                y1="5.5"
                x2="2.3"
                y2="5.5"
            />
        </g>
    </Icon>
);

export default Scooter;
