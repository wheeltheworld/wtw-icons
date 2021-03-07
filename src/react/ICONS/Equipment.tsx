import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Equipment: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            transform="translate(.5 .5)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        >
            <path
                d="M5 13a4 4 0 000 8 3.958 3.958 0 003-1.377M15.541 19A4 4 0 1019 13"
                data-color="color-2"
                strokeLinejoin="round"
            />
            <path
                d="M19 17l-3.6-1.8a1 1 0 00-.819-.034l-3.6 1.439a1 1 0 01-1.32-.612l-1.9-5.7a1 1 0 011.4-1.21l3.471 1.735a1 1 0 00.763.054L16 10"
                strokeLinejoin="round"
            />
            <circle cx={8} cy={4} r={2} data-cap="butt" />
        </g>
    </Icon>
);

export default Equipment;
