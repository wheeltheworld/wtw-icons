import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Closet: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <rect
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x="3.43"
            y="2.39"
            width="33.14"
            height="36.46"
        />
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x1="20"
            y1="2.39"
            x2="20"
            y2="38.85"
        />
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x1="20"
            y1="25.59"
            x2="3.43"
            y2="25.59"
        />
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x1="10.06"
            y1="32.22"
            x2="13.37"
            y2="32.22"
        />
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x1="28.29"
            y1="9.02"
            x2="28.29"
            y2="13.99"
        />
    </Icon>
);

export default Closet;
