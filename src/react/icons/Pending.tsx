import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Pending: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="#f9b32d"
                d="M20,.23A19.75,19.75,0,0,0,.31,19.79,19.72,19.72,0,0,0,19.87,39.61H20A19.69,19.69,0,1,0,20,.23Zm0,36.71h-.13a17.12,17.12,0,0,1-12-5.07A16.87,16.87,0,0,1,3,19.83,17,17,0,1,1,20,36.94Z"
            />
            <path fill="#f9b32d" d="M20,17.94a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V20A2,2,0,0,0,20,17.94Z" />
            <path fill="#f9b32d" d="M25.49,17.94a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V20A2,2,0,0,0,25.49,17.94Z" />
            <path fill="#f9b32d" d="M14.51,17.94a2,2,0,0,0-2,2V20a2,2,0,1,0,4,0V20A2,2,0,0,0,14.51,17.94Z" />
        </g>
    </Icon>
);

export default Pending;
