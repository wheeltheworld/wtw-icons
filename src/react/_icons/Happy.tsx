import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Happy: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeWidth={1.5}
            fill="none"
            stroke={stroke}
            strokeLinejoin="round"
            className="nc-icon-wrapper"
        >
            <circle cx={12} cy={12} r={11} />
            <path d="M8,15a4,4,0,0,0,8,0Z" stroke={stroke} fill={fill} />
            <circle cx={7.5} cy={10.5} r={1.5} stroke="none" fill={fill} />
            <circle cx={16.5} cy={10.5} r={1.5} stroke="none" fill={fill} />
        </g>
    </Icon>
);

export default Happy;
