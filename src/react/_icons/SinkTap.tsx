import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SinkTap: IconComponent = (props) => (
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
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M16,20 c0-1.9,3-5,3-5s3,3.1,3,5s-1.5,3-3,3S16,21.9,16,20z"
            />
            <polyline fill="none" stroke="currentColor" strokeMiterlimit={10} points="12,1 1,1 1,5 " />
            <polygon fill="none" stroke="currentColor" strokeMiterlimit={10} points="1,5 23,5 23,11 7,11 7,23 1,23 " />
        </g>
    </Icon>
);

export default SinkTap;
