import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const BusinessCenter: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                points="5 23 1 23 1 13 5 13"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={9}
                y1={16}
                x2={11}
                y2={16}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <line
                x1={9}
                y1={19}
                x2={11}
                y2={19}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <line
                x1={9}
                y1={13}
                x2={11}
                y2={13}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <polyline
                points="13 6 13 2 23 5 23 23 5 23 5 9 15 9 15 23"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <line
                x1={19}
                y1={19}
                x2={19}
                y2={9}
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

export default BusinessCenter;
