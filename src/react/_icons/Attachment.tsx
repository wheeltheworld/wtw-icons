import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Attachment: IconComponent = (props) => (
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
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M18,4v12.5 c0,3.6-2.9,6.5-6.5,6.5h0C7.9,23,5,20.1,5,16.5v-11C5,3,7,1,9.5,1h0C12,1,14,3,14,5.5v10c0,1.4-1.1,2.5-2.5,2.5h0 C10.1,18,9,16.9,9,15.5V7"
            />
        </g>
    </Icon>
);

export default Attachment;
