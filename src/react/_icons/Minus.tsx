import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Minus: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g fill="none">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39 20C39 30.4937 30.4937 39 20 39C9.5063 39 1 30.4937 1 20C1 9.50632 9.5063 1 20 1C30.4937 1 39 9.50632 39 20Z"
                stroke="currentColor"
                stroke-width="1.5"
            />
            <path d="M14.3 20H25.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </g>
    </Icon>
);

export default Minus;
