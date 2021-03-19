import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TV: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="7"
                y1="22"
                x2="17"
                y2="22"
                strokeLinejoin="round"
            />
            <rect
                x="1"
                y="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="22"
                height="16"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default TV;
