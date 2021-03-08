import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ToiletGrabBar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M0.7,10.8l18.2,0c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.4-1.4,1.4l-18.2,0V10.8z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M18.8,13.7v1.2c-0.3,2.7-2.3,4.9-5,5.5c-0.3,0.1-0.6,0.4-0.6,0.7v2.3H4.9V22c0-1.6-1-3-2.6-3.6c-1-0.3-1.6-1.2-1.6-2.2h0v-2.5"
            />
        </g>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M0.7,1.9l19.8,0.1c1.5,0,2.6,1.2,2.6,2.6S22,7.2,20.6,7.2L0.7,7.1"
        />
    </Icon>
);

export default ToiletGrabBar;
