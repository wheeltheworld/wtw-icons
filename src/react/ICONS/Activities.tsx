import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Activities: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(.5 .5)"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
        >
            <circle cx={13} cy={3} r={2} />
            <path d="M15.781 14l-1.389-4.628A1.892 1.892 0 0012.573 8h0a1.9 1.9 0 00-1.05.318L9 10H4" data-cap="butt" />
            <path d="M6 19H4s-3-1-3-5h5l7 8M15 19h5s3-1 3-5H10" data-color="color-2" />
        </g>
    </Icon>
);

export default Activities;
