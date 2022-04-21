import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Save: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M17,1c-2.1,0-3.9,1.1-5,2.7 C10.9,2.1,9.1,1,7,1C3.7,1,1,3.7,1,7c0,6,11,15,11,15s11-9,11-15C23,3.7,20.3,1,17,1z"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Save;
