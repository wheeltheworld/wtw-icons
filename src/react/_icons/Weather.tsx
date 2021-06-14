import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Weather: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M6.7,14.8C6.3,14,6,13,6,12 c0-3.3,2.7-6,6-6s6,2.7,6,6c0,1.4-0.5,2.7-1.3,3.7"
            />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={1} y1={12} x2={2} y2={12} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={4.2} y1={4.2} x2={4.9} y2={4.9} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={12} y1={1} x2={12} y2={2} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={19.8} y1={4.2} x2={19.1} y2={4.9} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={23} y1={12} x2={22} y2={12} />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M5,23c-2.2,0-4-1.8-4-4 c0-2.2,1.8-4,4-4c0.5,0,1,0.1,1.5,0.3c0.9-1.9,2.8-3.3,5-3.3c2.4,0,4.5,1.6,5.2,3.7c0.7-0.5,1.4-0.7,2.3-0.7c2.2,0,4,1.8,4,4 c0,2.2-1.8,4-4,4H5z"
            />
        </g>
    </Icon>
);

export default Weather;
