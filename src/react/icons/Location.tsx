import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Location: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M20,9c0,4.9-8,13-8,13 S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                strokeLinejoin="round"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="12"
                cy="9"
                r="3"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Location;
