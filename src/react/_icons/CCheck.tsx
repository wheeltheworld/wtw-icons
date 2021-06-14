import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const CCheck: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline data-color="color-2" fill="none" strokeMiterlimit={10} points=" 6,12 10,16 18,8 " />
            <circle fill="none" stroke="currentColor" strokeMiterlimit={10} cx={12} cy={12} r={11} />
        </g>
    </Icon>
);

export default CCheck;
