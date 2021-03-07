import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const FitnessCenter: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1="8"
                y1="15"
                x2="8"
                y2="23"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <line
                x1="16"
                y1="15"
                x2="16"
                y2="23"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M19,7l-3,8H8L5,7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="9.5"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="1"
                y1="4"
                x2="23"
                y2="4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="2"
                y1="1"
                x2="2"
                y2="7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="22"
                y1="1"
                x2="22"
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

export default FitnessCenter;
