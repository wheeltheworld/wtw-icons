import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Person: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                fill="none"
                strokeMiterlimit="10"
                d="M15,15H9 c-3.314,0-6,2.686-6,6v1c0,0,3.125,1,9,1s9-1,9-1v-1C21,17.686,18.314,15,15,15z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M7,6c0-2.761,2.239-5,5-5 s5,2.239,5,5s-2.239,6-5,6S7,8.761,7,6z"
            />
        </g>
    </Icon>
);

export default Person;
