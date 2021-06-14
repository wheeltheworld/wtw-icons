import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Playground: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                points="9 13 13 13 20 22 23 22"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <line
                x1={14}
                y1={20}
                x2={14}
                y2={22}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <circle
                cx={5}
                cy={8}
                r={1}
                fill="currentColor"
                data-cap="butt"
                data-color="color-2"
                data-stroke="none"
                strokeLinecap="round"
            />
            <polyline
                points="1 22 1 6 5 2 9 6 9 22"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={1}
                y1={13}
                x2={9}
                y2={13}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={1}
                y1={18}
                x2={9}
                y2={18}
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

export default Playground;
