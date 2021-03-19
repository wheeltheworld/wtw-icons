import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Cafeteria: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeLinejoin="round"
        >
            <path data-color="color-2" d="M10.5 1.5v2M5.5 2.5v2M15.5 2.5v2" />
            <path data-cap="butt" d="M19.5 8.5h4v4c0 1.1-.9 2-2 2H19" />
            <path d="M10.5 20.5h0c-5 0-9-4-9-9v-3h18v3c0 5-4 9-9 9zM1.5 23.5h18" />
        </g>
    </Icon>
);

export default Cafeteria;
