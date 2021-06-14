import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Bathroom: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M5,6L5,6 C3.895,6,3,5.105,3,4v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C7,5.105,6.105,6,5,6z"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M7,22H3v-5H1v-6 c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2v6H7V22z"
                strokeLinejoin="round"
            />
            <path
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M17,6L17,6 c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C19,5.105,18.105,6,17,6z"
                strokeLinejoin="round"
            />
            <polygon
                data-color="color-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points=" 19,22 15,22 15,18 12,18 15,9 19,9 22,18 19,18 "
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default Bathroom;
