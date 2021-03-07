import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Level: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <rect x="2" y="14" fill="none" stroke="currentColor" strokeMiterlimit="10" width="4" height="6" />
            <rect x="10" y="9" fill="none" strokeMiterlimit="10" width="4" height="11" />
            <rect x="18" y="4" fill="none" stroke="currentColor" strokeMiterlimit="10" width="4" height="16" />
        </g>
    </Icon>
);

export default Level;
