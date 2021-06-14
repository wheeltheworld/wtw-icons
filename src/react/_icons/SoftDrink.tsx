import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SoftDrink: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1={4}
                y1={12}
                x2={20}
                y2={12}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <polyline
                points="5 12 6 23 18 23 19 12"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M5,12a7,7,0,0,1,14,0"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <polyline
                points="12 18 11 1 7 1"
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

export default SoftDrink;
