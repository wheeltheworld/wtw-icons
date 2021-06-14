import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Garden: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M18,9h-1 c-2.76142,0-5,2.23858-5,5v2h1c2.76142,0,5-2.23858,5-5V9z"
            />
            <path
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M6,4h1 c2.76142,0,5,2.23858,5,5v2h-1c-2.76142,0-5-2.23858-5-5V4z"
            />
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                x1={12}
                y1={19.12636}
                x2={12}
                y2={1}
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M1,23h5 c0-1.10461,0.89545-2,2-2c0.49872,0,0.94916,0.18909,1.29944,0.49103C9.89551,20.03088,11.32544,19,13,19c2.20917,0,4,1.79083,4,4h6 "
            />
        </g>
    </Icon>
);

export default Garden;
