import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowDown: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5,8l7.7,8l7.3-8"
        />
    </Icon>
);

export default ArrowDown;
