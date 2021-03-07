import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Gratuities: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <circle
                cx="15"
                cy="6"
                r="5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M17,16h1.838a3,3,0,0,1,2.846,2.051L22,19,10.532,22.529a4,4,0,0,1-2.965-.246L1,19V12H2c1.105,0,3.906.438,5,2h3a4,4,0,0,1,4,4H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="15"
                y1="5"
                x2="15"
                y2="7"
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

export default Gratuities;
