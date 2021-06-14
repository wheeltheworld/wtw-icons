import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WheelchairUser: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <circle
                cx={11}
                cy={3}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle
                data-cap="butt"
                data-color="color-2"
                cx={20}
                cy={22}
                r={1}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                data-color="color-2"
                d="M7.763,13.551A4.991,4.991,0,1,0,15,18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <path
                data-cap="butt"
                d="M20,18V16a1,1,0,0,0-1-1H12.735a2,2,0,0,1-1.98-1.717L10,8"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                d="M14.571,12l-.448-3.141A1,1,0,0,0,13.133,8H10.1l-.2.019L5.48,8.9a1,1,0,0,0-.7.533L3,13"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default WheelchairUser;
