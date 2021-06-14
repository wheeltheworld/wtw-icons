import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Duplicate: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline data-color="color-2" fill="none" strokeMiterlimit={10} points=" 16,8 22,8 22,22 8,22 8,16 " />
            <rect x={2} y={2} fill="none" stroke="currentColor" strokeMiterlimit={10} width={14} height={14} />
        </g>
    </Icon>
);

export default Duplicate;
