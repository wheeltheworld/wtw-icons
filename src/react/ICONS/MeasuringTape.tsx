import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MeasuringTape: IconComponent = (props) => (
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
            <path data-color="color-2" d="M18 20v-3M13 20v-3M8 20v-3" />
            <path d="M6 20c-2.761 0-5-1.343-5-3V7c0 1.657 2.239 3 5 3h17v10z" />
            <ellipse cx={6} cy={7} rx={5} ry={3} data-cap="butt" />
        </g>
    </Icon>
);

export default MeasuringTape;
