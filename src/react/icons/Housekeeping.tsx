import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Housekeeping: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <rect
                x="8"
                y="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="13"
                height="4"
                strokeLinejoin="round"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M19,5l0,18H8 v-6c0,0,6-4,6-12"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="1"
                y1="3"
                x2="3"
                y2="3"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="3.05"
                y1="7.95"
                x2="4.464"
                y2="6.536"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Housekeeping;
