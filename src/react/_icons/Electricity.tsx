import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Electricity: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeLinejoin="round"
            d="M15.5 1.5h-7l-3 11h6l-2 8 10-12h-6z"
        />
    </Icon>
);

export default Electricity;
