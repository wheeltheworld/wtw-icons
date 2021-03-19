import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const BusinessCenter: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            strokeLinejoin="round"
        >
            <path d="M5.5 23.5h-4v-10h4" />
            <path data-color="color-2" d="M9.5 16.5h2M9.5 19.5h2M9.5 13.5h2" />
            <path d="M13.5 6.5v-4l10 3v18h-18v-14h10v14" />
            <path data-color="color-2" d="M19.5 19.5v-10" />
        </g>
    </Icon>
);

export default BusinessCenter;
