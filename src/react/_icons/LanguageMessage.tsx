import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LanguageMessage: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <svg>
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                className="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 2L23 2 23 17 13 17 6 22 6 17 1 17 1 2z"
                transform="translate(.5 .5)"
            ></path>
        </svg>
    </Icon>
);

export default LanguageMessage;
