import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Iron: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                points="1,16 1,20 22,20 20,16 "
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M20,16H1V8h11 C16.4,8,20,11.6,20,16L20,16z"
            />
            <path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M1,8V6c0-1.1,0.9-2,2-2h7" />
        </g>
    </Icon>
);

export default Iron;
