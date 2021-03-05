import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const TurningRadius: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M3.8,14.5V2.4h16.3v12.2H3.8z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M1,1.2l2.8,1.2"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M23,1.2l-2.9,1.2"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M1,16.4l2.8-1.8"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M23,16.4l-2.9-1.8"
            />
            <ellipse
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="12.2"
                cy="19.6"
                rx="5.4"
                ry="3.1"
            />
        </g>
    </Icon>
);

export default TurningRadius;
