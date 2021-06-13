import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowForward: IconComponent = (props) => (
    <Icon viewBox="0 0 10 17" fill="undefined" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1,16l8-7.7L1,1"
        />
    </Icon>
);

export default ArrowForward;
