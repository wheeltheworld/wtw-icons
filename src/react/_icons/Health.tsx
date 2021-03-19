import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Health: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle fill="none" stroke="currentColor" strokeMiterlimit="10" cx="12" cy="12" r="11" />
            <polygon
                fill="none"
                strokeMiterlimit="10"
                points=" 18,10 14,10 14,6 10,6 10,10 6,10 6,14 10,14 10,18 14,18 14,14 18,14 "
            />
        </g>
    </Icon>
);

export default Health;
