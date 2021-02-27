import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Daycare: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <circle fill="currentColor" cx="14.83" cy="27.78" r="2.21" />
            <circle fill="currentColor" cx="25.17" cy="27.78" r="2.21" />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M36.24,25.57a4.42,4.42,0,0,0-3.7-4.36,13.27,13.27,0,0,0-25.08,0,4.41,4.41,0,0,0,0,8.71,13.27,13.27,0,0,0,25.08,0A4.42,4.42,0,0,0,36.24,25.57Z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M20,16.71c-.37-5.29,2.46-8.55,7.38-8.86"
            />
        </g>
    </Icon>
);

export default Daycare;
