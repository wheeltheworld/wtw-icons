import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowUp: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5,16l-7.7-8l-7.3,8"
        />
    </Icon>
);

export default ArrowUp;
