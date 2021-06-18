import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Camera: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle cx="12" cy="13" r="5" fill="none" strokeMiterlimit="10" />
            <line x1="3" y1="2" x2="5" y2="2" fill="none" stroke="currentColor" strokeMiterlimit="10" />
            <path
                d="M21,22H3a2,2,0,0,1-2-2V7A2,2,0,0,1,3,5H7L9,2h6l2,3h4a2,2,0,0,1,2,2V20A2,2,0,0,1,21,22Z"
                fill="none"
                stroke="#232323"
                strokeMiterlimit="10"
            />
            <circle cx="4" cy="8" r="1" stroke="none" />
        </g>
    </Icon>
);

export default Camera;
