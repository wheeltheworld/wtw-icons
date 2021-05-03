import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Missing: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="red"
                d="M20,.23A19.75,19.75,0,0,0,.31,19.79,19.72,19.72,0,0,0,19.87,39.61H20A19.69,19.69,0,1,0,20,.23Zm0,36.71h-.13a17.12,17.12,0,0,1-12-5.07A16.87,16.87,0,0,1,3,19.83,17,17,0,1,1,20,36.94Z"
            />
            <path
                fill="red"
                d="M20,24.3a1.48,1.48,0,0,0,1.49-1.49V10.56a1.49,1.49,0,1,0-3,0V22.81A1.48,1.48,0,0,0,20,24.3Z"
            />
            <path fill="red" d="M20,27.18a2,2,0,0,0-2,2v.08a2,2,0,1,0,4,0V29.2A2,2,0,0,0,20,27.18Z" />
        </g>
    </Icon>
);

export default Missing;
