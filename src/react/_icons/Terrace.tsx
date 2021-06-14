import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Terrace: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1={7}
                y1={15}
                x2={17}
                y2={15}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={12}
                y1={23}
                x2={12}
                y2={15}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={23}
                y1={13}
                x2={23}
                y2={23}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <polyline
                points="23 19 17 19 17 23"
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
                x2={1}
                y2={23}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <polyline
                points="1 19 7 19 7 23"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <path
                d="M22,6A12.5,12.5,0,0,0,2,6Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <line
                x1={12}
                y1={6}
                x2={12}
                y2={10}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
        </g>
    </Icon>
);

export default Terrace;
