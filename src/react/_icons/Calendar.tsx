import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Calendar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
        >
            <path data-color="color-2" d="M17.5 4.5v-3M7.5 4.5v-3" />
            <path data-cap="butt" data-color="color-2" d="M1.5 8.5h22" />
            <path d="M1.5 4.5h22v18h-22z" />
        </g>
    </Icon>
);

export default Calendar;
