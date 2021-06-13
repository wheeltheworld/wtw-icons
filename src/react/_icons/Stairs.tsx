import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Stairs: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline
                points="22 2 17 2 17 7 12 7 12 12 7 12 7 17 2 17 2 22"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
            />
        </g>
    </Icon>
);

export default Stairs;
