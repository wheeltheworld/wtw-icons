import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Baby: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle
                data-stroke="none"
                fill="currentColor"
                cx="8.5"
                cy="14.5"
                r="1.5"
                strokeLinejoin="miter"
                strokeLinecap="square"
                stroke="none"
            />
            <circle
                data-stroke="none"
                fill="currentColor"
                cx="15.5"
                cy="14.5"
                r="1.5"
                strokeLinejoin="miter"
                strokeLinecap="square"
                stroke="none"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M23,13 c0-1.487-1.085-2.713-2.505-2.95C19.273,6.53,15.936,4,12,4s-7.273,2.53-8.495,6.05C2.085,10.287,1,11.513,1,13 s1.085,2.713,2.505,2.95C4.727,19.47,8.064,22,12,22s7.273-2.53,8.495-6.05C21.915,15.713,23,14.487,23,13z"
            />
            <path data-cap="butt" fill="none" strokeMiterlimit="10" d="M12,7 c-0.25-3.583,1.667-5.792,5-6" />
        </g>
    </Icon>
);

export default Baby;
