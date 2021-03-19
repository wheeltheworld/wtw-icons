import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Blind: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M2,13c0,0,4-6,10-6 c6,0,10,6,10,6s-4,6-10,6C6,19,2,13,2,13z"
            />
            <circle fill="none" strokeMiterlimit="10" cx="12" cy="11" r="4" />
            <line fill="none" strokeMiterlimit="10" x1="3" y1="20" x2="19" y2="4" />
        </g>
    </Icon>
);

export default Blind;
