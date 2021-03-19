import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ToiletPaper: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                points="16,17 16,23 1,23 1,9 "
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                d="M5,17h14c2.2,0,4-3.6,4-8s-1.8-8-4-8 H5"
                strokeLinejoin="round"
                strokeLinecap="round"
            />
            <ellipse
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="5"
                cy="9"
                rx="4"
                ry="8"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="5"
                y1="8"
                x2="5"
                y2="10"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default ToiletPaper;
