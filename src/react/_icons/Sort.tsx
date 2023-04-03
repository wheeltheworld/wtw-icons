import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Sort: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
    <path
        stroke={stroke}
        fill="none"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 4v16M16 20V4M4 16l4 4 4-4M20 8l-4-4-4 4"
      ></path>
    </Icon>
);

export default Sort;
