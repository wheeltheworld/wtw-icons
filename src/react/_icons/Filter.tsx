import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Filter: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
    <path
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="1.5"
        fill="none"
        d="M2 6h3m17 0H9M22 12h-3M2 12h13M22 18H11m-9 0h5"
      ></path>
      <circle cx="7" cy="6" r="2" stroke={stroke} fill="none" strokeWidth="1.5"></circle>
      <circle
        cx="17"
        cy="12"
        r="2"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        transform="rotate(-180 17 12)"
      ></circle>
      <circle
        cx="9"
        cy="18"
        r="2"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        transform="rotate(-180 9 18)"
      ></circle>
    </Icon>
);

export default Filter;
