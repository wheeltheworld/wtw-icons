import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Shop: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1="12"
                y1="13"
                x2="12"
                y2="17"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="8"
                y1="13"
                x2="8"
                y2="17"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="16"
                y1="13"
                x2="16"
                y2="17"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                data-cap="butt"
                x1="5"
                y1="8"
                x2="9"
                y2="1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <line
                data-cap="butt"
                x1="19"
                y1="8"
                x2="15"
                y2="1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M21,12v8a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <line
                x1="1"
                y1="8"
                x2="23"
                y2="8"
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

export default Shop;
