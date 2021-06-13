import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Warning: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle cx={12} cy={12} r={11} fill="none" stroke="currentColor" strokeMiterlimit={10} />
            <line data-color="color-2" x1={12} y1={7} x2={12} y2={13} fill="none" strokeMiterlimit={10} />
            <circle data-color="color-2" data-stroke="none" cx={12} cy={17} r={1} stroke="none" />
        </g>
    </Icon>
);

export default Warning;
