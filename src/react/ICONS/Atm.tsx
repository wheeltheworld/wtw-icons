import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ATM: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M29.85,15.87V38.13a.73.73,0,0,1-.73.72H10.88a.72.72,0,0,1-.73-.72V15.87"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M29.85,22.24h3.9a3.93,3.93,0,0,0,4.3-4.3V13.51a3.93,3.93,0,0,0-4.3-4.3H6.25A3.93,3.93,0,0,0,2,13.51v4.43a3.93,3.93,0,0,0,4.3,4.3h3.9"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M6.85,15.87H33"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M20,19.78V34.07"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5px"
                d="M23.1,22.8A3.9,3.9,0,0,0,20,21.73h-.81a2.55,2.55,0,0,0-2.54,2.55c0,1.41.67,2.18,2.54,2.54l1.79.12a2.74,2.74,0,1,1,0,5.48,8.8,8.8,0,0,1-4.73-1.14"
            />
        </g>
    </Icon>
);

export default ATM;
