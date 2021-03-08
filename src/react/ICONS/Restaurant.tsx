import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Restaurant: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g className="prefix__nc-icon-wrapper" fill="currentColor">
            <path
                className="prefix__st3"
                d="M6.7 4.19v5.7c0 .79-.64 1.42-1.42 1.42H2.42c-.79 0-1.42-.64-1.42-1.42v-5.7M3.85 4.19v4.27M3.85 11.31v8.54M23 14.83h-3.56V7c0-1.57 1.28-2.85 2.85-2.85H23v10.68zM23 14.83v4.98"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
            />
            <g transform="translate(.5 .5)">
                <path
                    className="prefix__st3"
                    d="M19.83 14.33a7.831 7.831 0 01-7.3 4.98 7.83 7.83 0 01-7.83-7.83M6.3 6.73c1.42-2.01 3.58-3.08 6.23-3.08a7.81 7.81 0 016.18 3.02"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
                <circle
                    className="prefix__st3"
                    cx={12.53}
                    cy={11.48}
                    r={4.98}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                />
            </g>
        </g>
    </Icon>
);

export default Restaurant;
