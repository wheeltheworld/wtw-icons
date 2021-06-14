import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Laundry: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                data-cap="butt"
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                d="M5,12c8.3-5.5,5.5,5.7,14,0"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <rect
                x={1}
                y={1}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                width={22}
                height={22}
                strokeLinejoin="round"
            />
            <circle
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                cx={12}
                cy={12}
                r={7}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Laundry;
