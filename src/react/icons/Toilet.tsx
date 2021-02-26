import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Toilet: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                x1="5.64"
                y1="25.94"
                x2="34.36"
                y2="25.94"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M10.32,21.1V6.58a3.23,3.23,0,0,1,3.23-3.23h12.9a3.23,3.23,0,0,1,3.23,3.23V21.1"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M34.52,21.1h-29v3.23A9.71,9.71,0,0,0,15.16,34h0v4.84h9.68V34h0a9.71,9.71,0,0,0,9.68-9.68Z"
            />
        </g>
    </Icon>
);

export default Toilet;
