import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Unverified: IconComponent = (props) => (
    <Icon fill="none" viewBox="0 0 24 24" {...props}>
        <svg width="24" height="24" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3359_9059)">
            <circle cx="11.2005" cy="14.0001" r="11.2005" fill="#829797"/>
            <circle cx="11.2005" cy="14.0001" r="3.62047" stroke="white" stroke-width="1.5"/>
            </g>
            <defs>
            <clipPath id="clip0_3359_9059">
            <rect width="22.4011" height="22.4011" fill="white" transform="translate(0 2.79956)"/>
            </clipPath>
            </defs>
        </svg>
    </Icon>
);

export default Unverified;
