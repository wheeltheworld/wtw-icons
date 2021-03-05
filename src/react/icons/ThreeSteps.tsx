import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const ThreeSteps: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <g transform="translate(0.5 0.5)">
                <polyline
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="currentColor"
                    points="16.58,6.5 11.58,6.5 11.58,11.5 6.58,11.5 6.58,16.5 1.58,16.5 1.58,21.5"
                />
            </g>
            <line
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                fill="none"
                stroke="currentColor"
                x1="1.08"
                y1="22"
                x2="17.08"
                y2="22"
            />
        </g>
    </Icon>
);

export default ThreeSteps;
