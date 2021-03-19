import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Minus: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="currentColor"
                d="M20,3.26A17.93,17.93,0,1,1,2.08,21.19,17.94,17.94,0,0,1,20,3.26m0-.5A18.43,18.43,0,1,0,38.42,21.19,18.43,18.43,0,0,0,20,2.76Z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth=".5"
                d="M13.77,21.19H26.23"
            />
        </g>
    </Icon>
);

export default Minus;
