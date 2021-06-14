import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Backpack: IconComponent = (props) => (
    <Icon viewBox="0 0 48 48" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M40,46H8V18 c0-4.4,3.6-8,8-8h16c4.4,0,8,3.6,8,8V46z"
            />
            <path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M8,32L8,32 c-3.3,0-6,2.7-6,6v8h6" />
            <path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M40,32L40,32 c3.3,0,6,2.7,6,6v8h-6" />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={8} y1={26} x2={40} y2={26} />
            <path
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M16,14v-4 c0-4.4,3.6-8,8-8l0,0c4.4,0,8,3.6,8,8v4"
            />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={14} y1={34} x2={18} y2={34} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={30} y1={34} x2={34} y2={34} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={16} y1={22} x2={16} y2={38} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={32} y1={22} x2={32} y2={38} />
        </g>
    </Icon>
);

export default Backpack;
