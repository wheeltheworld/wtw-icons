import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const QueenBed: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="currentColor">
            <g transform="translate(.5 .5)">
                <path
                    d="M3.25 13.75h16.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
                <path
                    d="M3.25 16.75h16.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
                <path
                    d="M5.5 4h12v4.5h-12z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
                <path
                    d="M19.75 19v-5.25L17.5 8.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
                <path
                    d="M5.5 8.5l-2.25 5.25V19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
            </g>
        </g>
    </Icon>
);

export default QueenBed;
