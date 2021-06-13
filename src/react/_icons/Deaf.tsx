import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Deaf: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                d="M14.683,9.317A2.961,2.961,0,0,0,15,8,3,3,0,0,0,9,8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={21}
                y1={3}
                x2={22}
                y2={2}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <path
                d="M7.532,22.126A3.96,3.96,0,0,0,10,23H9.983c2.21,0,3.56-1.835,4-4C15,14,19,14,19,8A7,7,0,0,0,5,8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={2}
                y1={22}
                x2={12}
                y2={12}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Deaf;
