import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const AudioGuides: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M23,15v-3 c0-6.075-4.925-11-11-11h0C5.925,1,1,5.925,1,12v3"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M7,15H1v6 c0,1.105,0.895,2,2,2h4V15z"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M23,15h-6v8h4 c1.105,0,2-0.895,2-2V15z"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default AudioGuides;
