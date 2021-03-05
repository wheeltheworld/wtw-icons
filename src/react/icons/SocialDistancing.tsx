import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const SocialDistancing: IconComponent = (props) => (
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
                d="M4.5,6h0a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2h0A2,2,0,0,1,4.5,6Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M2,22V16H1V12A3,3,0,0,1,4,9H5a3,3,0,0,1,3,3"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M17.5,4h0a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2h0A2,2,0,0,1,17.5,4Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M16,12a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v4H22v6"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <line x1="6" y1="19" x2="18" y2="19" fill="none" strokeMiterlimit="10" data-cap="butt" />
            <polyline points="9 22 6 19 9 16" fill="none" strokeMiterlimit="10" />
            <polyline points="14.998 22 17.998 19 14.998 16" fill="none" strokeMiterlimit="10" />
        </g>
    </Icon>
);

export default SocialDistancing;
