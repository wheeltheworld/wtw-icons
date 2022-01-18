import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const DoorHandle: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g fill="none">
            <path
                d="M38.3333 8.3335H8.33325V15.0002H38.3333V8.3335Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.33325 31.6667V26.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 8.33341V1.66675H1.66663V38.3334H15V21.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default DoorHandle;
