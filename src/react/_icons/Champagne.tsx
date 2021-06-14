import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Champagne: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line data-color="color-2" fill="none" strokeMiterlimit={10} x1={8} y1={9} x2={16} y2={9} />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M12,17L12,17 c-2.2,0-4-1.8-4-4V1h8v12C16,15.2,14.2,17,12,17z"
            />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={12} y1={17} x2={12} y2={23} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={8} y1={23} x2={16} y2={23} />
        </g>
    </Icon>
);

export default Champagne;
