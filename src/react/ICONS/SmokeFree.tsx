import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SmokeFree: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                points="7 13 1 13 1 17 11 17"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <polyline
                points="10 13 23 13 23 17 19 17 14 17"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <line
                x1="2"
                y1="5"
                x2="19"
                y2="22"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M19,9a4,4,0,0,0-4-4,4,4,0,0,1-4-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M15,1a8,8,0,0,1,8,8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="19"
                y1="13"
                x2="19"
                y2="17"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
        </g>
    </Icon>
);

export default SmokeFree;
