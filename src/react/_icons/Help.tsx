import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Help: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle cx={12} cy={12} r={11} fill="none" stroke="currentColor" strokeMiterlimit={10} />
            <circle data-color="color-2" data-stroke="none" cx={12} cy={18} r={1} stroke="none" />
            <path
                data-color="color-2"
                d="M9.853,6.56c1.98-.875,4.542-.771,5.417.645s.271,3.063-1.229,4.334S12,13.5,12,14.5"
                fill="none"
                strokeMiterlimit={10}
            />
        </g>
    </Icon>
);

export default Help;
