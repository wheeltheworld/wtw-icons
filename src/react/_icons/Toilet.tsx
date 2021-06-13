import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Toilet: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                x1={3.1}
                y1={15}
                x2={20.9}
                y2={15}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                data-cap="butt"
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                d="M6,12V3c0-1.1,0.9-2,2-2h8 c1.1,0,2,0.9,2,2v9"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M21,12H3v2c0,3.3,2.7,6,6,6 l0,0v3h6v-3l0,0c3.3,0,6-2.7,6-6V12z"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Toilet;
