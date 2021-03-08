import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Work: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="16,7 16,2 8,2 8,7"
                strokeLinejoin="round"
            />
            <rect
                x="1"
                y="7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="22"
                height="15"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="5"
                y1="7"
                x2="5"
                y2="22"
                strokeLinejoin="round"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="19"
                y1="7"
                x2="19"
                y2="22"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Work;
