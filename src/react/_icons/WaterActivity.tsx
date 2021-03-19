import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Transportation: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            className="prefix__nc-icon-wrapper"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(.5 .5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                data-color="color-2"
                d="M14 18v.5a4.5 4.5 0 004.5 4.5h0a4.5 4.5 0 004.5-4.5V1M12 18h4"
                fill="none"
                strokeMiterlimit={10}
            />
            <rect x={1} y={4} width={18} height={10} rx={2} ry={2} fill="none" strokeMiterlimit={10} />
            <path data-stroke="none" stroke="none" d="M9 10h2l1 4H8l1-4z" />
            <path fill="none" strokeMiterlimit={10} d="M9 10h2l1 4H8l1-4z" />
        </g>
    </Icon>
);

export default Transportation;
