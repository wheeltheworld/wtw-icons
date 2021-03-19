import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Documentation: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            transform="translate(.5 .5)"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeLinejoin="round"
        >
            <path d="M21 20c0 1.7-1.3 3-3 3H3V1h15c1.7 0 3 1.3 3 3v16z" />
            <circle data-color="color-2" cx={12} cy={10} r={4} />
            <path data-color="color-2" d="M14 18h-4" />
        </g>
    </Icon>
);

export default Documentation;
