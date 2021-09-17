import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Accessibility: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5 0.5)">
            <circle
                fill="none"
                stroke={props.stroke || 'currentColor'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={10.1}
                cy={4.7}
                r={2.2}
            />
            <path
                fill="none"
                stroke={props.stroke || 'currentColor'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M6.6,12.9c-2,1.3-2.6,4-1.3,6s4,2.6,6,1.3c0.6-0.4,1.1-0.9,1.4-1.5"
            />
            <path
                fill="none"
                stroke={props.stroke || 'currentColor'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M17.4,19.6l-0.5-3.4c-0.1-0.6-0.6-1-1.1-0.9l-3.5,0.2c-1.2,0.1-2.2-0.8-2.3-1.9l-0.4-3.4l5.4,0.5"
            />
        </g>
    </Icon>
);

export default Accessibility;
