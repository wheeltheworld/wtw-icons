import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Hotel: IconComponent = (props) => (
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
            <path data-color="color-2" d="M5.5 23.5h-4v-9h4M19.5 23.5h4v-9h-4" />
            <path d="M5.5 1.5h14v22h-14zM9.5 5.5h1M14.5 5.5h1M9.5 9.5h1M14.5 9.5h1M9.5 13.5h1M14.5 13.5h1M9.5 17.5h1M14.5 17.5h1M12.5 23.5v-2" />
        </g>
    </Icon>
);

export default Hotel;
