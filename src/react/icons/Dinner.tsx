import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Dinner: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            d="M20.16 2.83v4.91M11.98 6.11v4.91M28.35 6.11v4.91M2.15 38.85h35.7"
        />
        <circle
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            cx="20.16"
            cy="19.2"
            r="3.27"
        />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            d="M3.79 38.85a16.38 16.38 0 0132.75 0"
        />
    </Icon>
);

export default Dinner;
