import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LeverHandle: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M19.7,23C19.7,23,19.7,23,19.7,23c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.4v-21c0-0.2-0.1-0.3-0.2-0.4
		C19.9,1,19.8,1,19.6,1L5,2.6L4.1,2.8C3.9,2.9,3.8,3.1,3.8,3.3v2.5V21c0,0.2,0.2,0.4,0.4,0.5L19.7,23z"
            />
            <g>
                <circle fill="#FFFFFF" stroke="currentColor" strokeMiterlimit={10} cx="15.4" cy="13.8" r="2.7" />
            </g>
            <polyline
                fill="none"
                stroke="colorColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                points="15.8,13.2 15.2,14.2 9.3,13.6"
            />
        </g>
    </Icon>
);

export default LeverHandle;
