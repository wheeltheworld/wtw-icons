import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Switch: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <rect
                x="9"
                y="6"
                width="6"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <rect data-stroke="none" x="9" y="6" width="6" height="6" fill="currentColor" />
        </g>
    </Icon>
);

export default Switch;
