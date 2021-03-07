import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Complete: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="green"
                d="M20,.23A19.75,19.75,0,0,0,.31,19.79,19.72,19.72,0,0,0,19.87,39.61H20A19.69,19.69,0,1,0,20,.23Zm0,36.71h-.13a17.12,17.12,0,0,1-12-5.07A16.87,16.87,0,0,1,3,19.83,17,17,0,1,1,20,36.94Z"
            />
            <path
                fill="green"
                d="M30.76,17.23l-.06.05L18,27.85a2.23,2.23,0,0,1-1.67.48,2.17,2.17,0,0,1-1.46-.92l-4.22-6.35a2.11,2.11,0,0,1,3.48-2.4l0,.06,2.91,4.39L28,14a2.12,2.12,0,1,1,2.79,3.19Z"
            />
        </g>
    </Icon>
);

export default Complete;
