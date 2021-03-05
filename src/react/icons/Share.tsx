import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Share: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                x1="7.6"
                y1="10.5"
                x2="16.4"
                y2="5.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                x1="7.6"
                y1="13.5"
                x2="16.4"
                y2="18.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="5"
                cy="12"
                r="3"
                strokeLinejoin="round"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="19"
                cy="4"
                r="3"
                strokeLinejoin="round"
            />
            <circle
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="19"
                cy="20"
                r="3"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Share;
