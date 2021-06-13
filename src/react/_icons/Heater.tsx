import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Heater: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={21} y1={12} x2={23} y2={12} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={12} x2={17} y2={12} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={7} y1={12} x2={10} y2={12} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={20} x2={17} y2={20} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={7} y1={20} x2={10} y2={20} />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M5,23L5,23 c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v10C7,22.1,6.1,23,5,23z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M12,23L12,23 c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v10C14,22.1,13.1,23,12,23z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M19,23L19,23 c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v10C21,22.1,20.1,23,19,23z"
            />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={12} y1={5} x2={12} y2={1} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={7} y1={6} x2={7} y2={4} />
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={17} y1={6} x2={17} y2={4} />
        </g>
    </Icon>
);

export default Heater;
