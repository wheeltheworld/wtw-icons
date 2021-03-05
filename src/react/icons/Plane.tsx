import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Person: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <polyline
                points="15.523 9.826 5.5 6.547 3 8 11.289 12.246"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M11.471,16.748l10.521-6.012a2,2,0,1,0-1.984-3.472L7.184,14.592,4.2,13.745,2,15l4,3Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="1"
                y1="23"
                x2="23"
                y2="23"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Person;
