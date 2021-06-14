import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Download: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                x1={12}
                y1={16}
                x2={12}
                y2={3}
            />
            <polyline fill="none" stroke="currentColor" strokeMiterlimit={10} points="17,3 23,3 23,21 1,21 1,3 7,3 " />
            <polyline data-color="color-2" fill="none" strokeMiterlimit={10} points=" 17,11 12,16 7,11 " />
        </g>
    </Icon>
);

export default Download;
