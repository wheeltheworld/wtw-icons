import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const CloseButton: IconComponent = (props) => (
    <Icon viewBox="0 0 26 26" {...props}>
        <g fill="none" className="nc-icon-wrapper">
        <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13 1.6c6.296 0 11.4 5.104 11.4 11.4S19.296 24.4 13 24.4 1.6 19.296 1.6 13 6.704 1.6 13 1.6z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.145 8.855l-8.29 8.29M17.145 17.145l-8.29-8.29"
      ></path>
      </g>
    </Icon>
);

export default CloseButton;
