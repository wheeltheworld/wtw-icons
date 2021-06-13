import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Car: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={4}
                y1={10}
                x2={18}
                y2={10}
                strokeLinejoin="round"
            />
            <polyline
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                points="20.949,16 23,16 23,10 18,10 16,5 6,5 4,10 1,10 1,16 3.051,16 "
                strokeLinecap="round"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                x1={7.949}
                y1={16}
                x2={16.051}
                y2={16}
                strokeLinecap="round"
            />
            <circle
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                cx={5.5}
                cy={16.5}
                r={2.5}
                strokeLinejoin="round"
            />
            <circle
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                cx={18.5}
                cy={16.5}
                r={2.5}
                strokeLinejoin="round"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={11}
                y1={5}
                x2={11}
                y2={10}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Car;
