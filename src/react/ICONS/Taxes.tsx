import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Taxes: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="21,23 3,23 3,2 6,4 9,2 12,4 15,2 18,4 21,2 "
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M9.048,17 c0.226,1.153,1.223,2,2.452,2h1c1.4,0,2.5-1.1,2.5-2.5l0,0c0-3.5-6-1.5-6-5l0,0C9,10.1,10.1,9,11.5,9h1 c1.228,0,2.225,0.846,2.452,1.999"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="12"
                y1="8"
                x2="12"
                y2="20"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Taxes;
