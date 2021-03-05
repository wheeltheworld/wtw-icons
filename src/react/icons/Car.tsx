import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Car: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="4"
                y1="10"
                x2="18"
                y2="10"
            />
            <polyline
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                points="20.949,16 23,16 23,10 18,10 16,5 6,5 4,10 1,10 1,16 3.051,16"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="7.949"
                y1="16"
                x2="16.051"
                y2="16"
            />
            <circle fill="none" strokeMiterlimit="10" cx="5.5" cy="16.5" r="2.5" />
            <circle fill="none" strokeMiterlimit="10" cx="18.5" cy="16.5" r="2.5" />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="11"
                y1="5"
                x2="11"
                y2="10"
            />
        </g>
    </Icon>
);

export default Car;
