import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Plus: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <path
                fill="currentColor"
                d="M20,3.24A17.94,17.94,0,1,1,2.06,21.17,18,18,0,0,1,20,3.24m0-.5A18.44,18.44,0,1,0,38.44,21.17,18.44,18.44,0,0,0,20,2.74Z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth=".5"
                d="M13.77,21.17H26.23"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth=".5"
                d="M20,27.4V14.94"
            />
        </g>
    </Icon>
);

export default Plus;
