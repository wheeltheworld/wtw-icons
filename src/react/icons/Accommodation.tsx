import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Accommodation: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line x1="1" y1="21" x2="1" y2="4" fill="none" stroke="currentColor" strokeMiterlimit="10" />
            <line x1="1" y1="18" x2="23" y2="18" fill="none" stroke="currentColor" strokeMiterlimit="10" />
            <polyline points="1 14 23 14 23 21" fill="none" stroke="currentColor" strokeMiterlimit="10" />
            <circle cx="6" cy="9" r="2" fill="none" strokeMiterlimit="10" />
            <path d="M23,11H11V7H21a2,2,0,0,1,2,2Z" fill="none" strokeMiterlimit="10" />
        </g>
    </Icon>
);

export default Accommodation;
