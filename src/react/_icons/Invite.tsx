import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Invite: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5 0.5)">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M11,13c-2.8,0-5.3,0.6-7,1.2c-1.2,0.4-2,1.6-2,2.8v4c0,0,10,0,10,0"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M11,13L11,13c-2.8,0-5-3.2-5-6V6c0-2.8,2.2-5,5-5l0,0c2.8,0,5,2.2,5,5v1C16,9.8,13.8,13,11,13z"
            />
            <g>
                <circle
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    cx={18.2}
                    cy={18.2}
                    r={3.8}
                />
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    x1={18.2}
                    y1={16.7}
                    x2={18.2}
                    y2={19.7}
                />
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    x1={16.7}
                    y1={18.2}
                    x2={19.7}
                    y2={18.2}
                />
            </g>
        </g>
    </Icon>
);

export default Invite;
