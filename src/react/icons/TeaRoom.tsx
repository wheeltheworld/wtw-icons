import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const TeaRoom: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M15,11.9V10.22a8.42,8.42,0,0,1,8.42-8.43h0a8.42,8.42,0,0,1,8.42,8.43V30.43"
            />
            <rect
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x="26.74"
                y="30.43"
                width="10.11"
                height="8.42"
            />
            <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                points="20 38.85 3.16 38.85 3.16 18.64 8.21 11.9 21.68 11.9 26.74 18.64 26.74 23.69"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="11.58"
                y1="18.64"
                x2="18.32"
                y2="18.64"
            />
        </g>
    </Icon>
);

export default TeaRoom;
