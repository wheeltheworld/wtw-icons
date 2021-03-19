import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Chair: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line fill="none" strokeMiterlimit="10" x1="1" y1="23" x2="1" y2="18" />
            <line fill="none" strokeMiterlimit="10" x1="23" y1="23" x2="23" y2="18" />
            <line fill="none" strokeMiterlimit="10" x1="5" y1="21" x2="5" y2="18" />
            <line fill="none" strokeMiterlimit="10" x1="19" y1="21" x2="19" y2="18" />
            <rect x="1" y="13" fill="none" stroke="currentColor" strokeMiterlimit="10" width="22" height="5" />
            <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" points="20,13 20,1 4,1 4,13" />
        </g>
    </Icon>
);

export default Chair;
