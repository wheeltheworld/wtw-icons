import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Breakfast: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={10}
                y1={1}
                x2={10}
                y2={3}
                strokeLinejoin="round"
            />
            <line
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={5}
                y1={2}
                x2={5}
                y2={4}
                strokeLinejoin="round"
            />
            <line
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={15}
                y1={2}
                x2={15}
                y2={4}
                strokeLinejoin="round"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                d="M19,8h4v4c0,1.1-0.9,2-2,2h-2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M10,20L10,20c-5,0-9-4-9-9 V8h18v3C19,16,15,20,10,20z"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={1}
                y1={23}
                x2={19}
                y2={23}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Breakfast;
