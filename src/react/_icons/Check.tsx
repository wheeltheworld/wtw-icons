import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Check: IconComponent = (props) => {
    return (
        <Icon viewBox="0 0 14 10" fill="none" {...props}>
            <path
                d="M1 5L5 9L13 1"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Icon>
    );
};

export default Check;