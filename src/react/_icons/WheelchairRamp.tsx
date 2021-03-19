import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WheelchairRamp: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5 0.5)">
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="9"
                cy="2.7"
                r="2"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="2,22.3 22,17.7 22,22.3"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M6.5,10.6c-1.7,1.4-2,3.9-0.6,5.6s3.9,2,5.6,0.6c0.5-0.4,0.9-0.9,1.2-1.5"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M17,15.7l-0.8-3.1c-0.1-0.5-0.6-0.8-1.1-0.7l-3.2,0.5c-1.1,0.2-2.1-0.5-2.3-1.6L9,7.7h5"
            />
        </g>
    </Icon>
);

export default WheelchairRamp;
