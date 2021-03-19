import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Nurse: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <circle
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                cx="20"
                cy="20.41"
                r="18.44"
            />
            <polygon
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                points="30.06 17.05 23.35 17.05 23.35 10.35 16.65 10.35 16.65 17.05 9.94 17.05 9.94 23.76 16.65 23.76 16.65 30.47 23.35 30.47 23.35 23.76 30.06 23.76 30.06 17.05"
            />
        </g>
    </Icon>
);

export default Nurse;
