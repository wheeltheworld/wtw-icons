import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Clock: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="12"
                cy="12"
                r="11"
                strokeLinejoin="round"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 12,6 12,12 18,12 "
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Clock;
