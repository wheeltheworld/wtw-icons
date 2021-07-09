import React from 'react'
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WeightScale:  IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
        fill="none"
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <rect width="20" height="20" x="2" y="2" rx="2" ry="2"></rect>
        <path d="M12 12L13 8" data-cap="butt"></path>
        <path d="M12 5a6.957 6.957 0 00-7 7h14a6.957 6.957 0 00-7-7z"></path>
      </g>
    </Icon>
);

export default WeightScale
