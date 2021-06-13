import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Dinner: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={12}
                y1={1}
                x2={12}
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
                x1={7}
                y1={3}
                x2={7}
                y2={6}
                strokeLinejoin="round"
            />
            <line
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={17}
                y1={3}
                x2={17}
                y2={6}
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
                x2={22.8}
                y2={23}
                strokeLinejoin="round"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                cx={12}
                cy={11}
                r={2}
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M2,23c0-5.5,4.5-10,10-10 s10,4.5,10,10"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Dinner;
