import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Parking: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <rect
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x="2.55"
                y="3.95"
                width="34.9"
                height="34.9"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="15.24"
                y1="13.47"
                x2="15.24"
                y2="30.92"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M15.24,23H20a4.76,4.76,0,0,0,4.76-4.76h0A4.76,4.76,0,0,0,20,13.47H15.24"
            />
        </g>
    </Icon>
);

export default Parking;
