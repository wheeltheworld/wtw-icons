import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Email: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
        transform="translate(0.5 0.5)"
      >
        <path d="M19 7L12 14 5 7" data-color="color-2"></path>
        <rect width="22" height="18" x="1" y="3" rx="2" ry="2"></rect>
        <path d="M7 15L5 17" data-color="color-2"></path>
        <path d="M17 15L19 17" data-color="color-2"></path>
      </g>
  </Icon>
);

export default Email;
