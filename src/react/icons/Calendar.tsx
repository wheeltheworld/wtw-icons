import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Calendar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                d="M21,12c0,7-9,10-9,10S3,19,3,12V3l9-2,9,2Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <polyline points="8 11 11 14 17 7" fill="none" strokeMiterlimit="10" />
        </g>
    </Icon>
);

export default Calendar;
