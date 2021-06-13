import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Delete: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
            />
            <line data-color="color-2" x1={1} y1={5} x2={23} y2={5} fill="none" strokeMiterlimit={10} />
            <path data-color="color-2" d="M8,5V2A1,1,0,0,1,9,1h6a1,1,0,0,1,1,1V5" fill="none" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Delete;
