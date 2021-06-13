import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Wheelchair: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                data-cap="butt"
                d="M12.47,12H18a2,2,0,0,1,2,2v4"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <line
                data-cap="butt"
                x1={6}
                y1={6}
                x2={17}
                y2={6}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <polyline
                data-cap="butt"
                points="6.823 10.117 5 1 2 1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <circle
                data-color="color-2"
                cx={8}
                cy={16}
                r={6}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle
                data-color="color-2"
                cx={8}
                cy={16}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle
                data-color="color-2"
                cx={20}
                cy={20}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Wheelchair;
