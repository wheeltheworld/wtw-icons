import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Id: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5 0.5)">
            <rect
                x="0.5"
                y="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                width="22"
                height="17"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="14.5"
                y1="10"
                x2="18.5"
                y2="10"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="14.5"
                y1="14"
                x2="18.5"
                y2="14"
            />
            <path fill="currentColor" d="M3.5,16c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3H3.5z" />
            <circle fill="currentColor" cx="7.5" cy="10" r="2" />
        </g>
    </Icon>
);

export default Id;
