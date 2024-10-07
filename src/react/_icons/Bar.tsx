import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Bar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                data-cap="butt"
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                d="M15,6c0-2.2,1.8-4,4-4 s4,1.8,4,4s-1.8,4-4,4c-1,0-1.9-0.4-2.7-1"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                x1={6.6}
                y1={10}
                x2={15.4}
                y2={10}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points="19,6 11,15 3,6 "
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={11}
                y1={15}
                x2={11}
                y2={22}
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={6}
                y1={22}
                x2={16}
                y2={22}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Bar;
