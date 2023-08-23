import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

// color #67D1CE
// fill: #D1F1F0
const AccessibilityProfile: IconComponent = (props) => (
    <Icon viewBox="0 0 48 48" {...props} fill="none">
        <rect width="46" height="40" x="1" y="4" fill="#fff" rx="4"></rect>
        <path fill="#67D1CE" d="M1 8a4 4 0 014-4h38a4 4 0 014 4v3H1V8z"></path>
        <rect
        width="44.5"
        height="38.5"
        x="1.75"
        y="4.75"
        stroke="#232323"
        strokeWidth="1.5"
        rx="3.25"
        ></rect>
        <path stroke="#232323" d="M2 11h44.5"></path>
        <circle cx="6" cy="8" r="1" fill="#232323"></circle>
        <circle cx="11" cy="8" r="1" fill="#232323"></circle>
        <circle cx="16" cy="8" r="1" fill="#232323"></circle>
        <rect
        width="15"
        height="15"
        x="5.5"
        y="14.5"
        fill="#D1F1F0"
        stroke="#232323"
        rx="1.5"
        ></rect>
        <g
        stroke="#232323"
        strokeLinecap="round"
        strokeMiterlimit="10"
        clipPath="url(#clip0_856_21757)"
        >
        <path
            strokeLinejoin="round"
            d="M12.5 18.5a1 1 0 100-2 1 1 0 000 2z"
        ></path>
        <path d="M17 27.5a.5.5 0 100-1 .5.5 0 000 1z"></path>
        <path
            strokeLinejoin="round"
            d="M10.882 22.776A2.495 2.495 0 1014.5 25"
        ></path>
        <path d="M17 25v-1a.5.5 0 00-.5-.5h-3.133a1 1 0 01-.99-.858L12 20"></path>
        <path
            strokeLinejoin="round"
            d="M14.286 22l-.224-1.57a.5.5 0 00-.495-.43H12.05l-.1.01-2.21.44a.5.5 0 00-.35.267L8.5 22.5"
        ></path>
        </g>
        <path
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M25 16h18M5 34h38M5 38h38M25 20h12M25 24h8"
        ></path>
        <defs>
        <clipPath id="clip0_856_21757">
            <path
            fill="#fff"
            d="M0 0H12V12H0z"
            transform="translate(7 16)"
            ></path>
        </clipPath>
        </defs>
    </Icon>
);

export default AccessibilityProfile;
