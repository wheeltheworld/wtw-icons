import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const RoomIllustration: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 85 48" fill="none" width="85" height="48" {...props}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M46 44V28a4 4 0 00-4-4H6a4 4 0 00-4 4v15M2 37.999L46 38M42 19V5H6v14"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 19v-5h11v5M24 19v-5h11v5M2 32h44"
        ></path>
        <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            clipPath="url(#clip0_126_7205)"
        >
            <path d="M75.912 26.133h-23.11v14.223h23.11V26.133zM67.912 12.622h-7.11l-2.134 7.111h11.378l-2.134-7.11zM64.357 19.733v2.844"></path>
            <path d="M55.823 40.355v3.556h2.133l.711-3.556M73.246 40.355v3.556h-2.133l-.712-3.556M52.801 33.244h23.111M62.401 36.8h4.267M62.401 29.689h4.267"></path>
        </g>
        <defs>
            <clipPath id="clip0_126_7205">
                <path fill="#fff" d="M0 0H34.133V34.133H0z" transform="translate(50.134 11.2)"></path>
            </clipPath>
        </defs>
    </Icon>
);

export default RoomIllustration;
