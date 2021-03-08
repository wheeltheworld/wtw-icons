import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Bus: IconComponent = (props) => (
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
                x1="16.051"
                y1="17"
                x2="7.949"
                y2="17"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M3.051,17H1V6c0-1.105,0.895-2,2-2h18 c1.105,0,2,0.895,2,2v11h-2.051"
            />
            <circle fill="none" strokeMiterlimit="10" cx="5.5" cy="17.5" r="2.5" />
            <circle fill="none" strokeMiterlimit="10" cx="18.5" cy="17.5" r="2.5" />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="1"
                y1="11"
                x2="23"
                y2="11"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="17"
                y1="4"
                x2="17"
                y2="11"
            />
        </g>
    </Icon>
);

export default Bus;
