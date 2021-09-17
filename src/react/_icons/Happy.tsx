import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Happy: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeWidth={1.5}
            fill="none"
            stroke={props.stroke || 'currentColor'}
            strokeLinejoin="round"
            className="nc-icon-wrapper"
        >
            <circle cx={12} cy={12} r={11} />
            <path
                d="M8,15a4,4,0,0,0,8,0Z"
                stroke={props.stroke || 'currentColor'}
                fill={props.fill || 'currentColor'}
            />
            <circle cx={7.5} cy={10.5} r={1.5} stroke="none" fill={props.fill || 'currentColor'} />
            <circle cx={16.5} cy={10.5} r={1.5} stroke="none" fill={props.fill || 'currentColor'} />
        </g>
    </Icon>
);

export default Happy;
