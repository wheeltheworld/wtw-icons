import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TactilePaving: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_1585_241)">
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          clipPath="url(#clip1_1585_241)"
        >
          <path d="M22.807 1.17H1.193v21.66h21.614V1.17zM6.28 4.345v6.226M10.097 4.345v6.226M17.72 4.345v6.226M13.903 4.345v6.226M6.28 13.326v6.227M10.097 13.326v6.227M17.72 13.326v6.227M13.903 13.326v6.227"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1585_241">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
        <clipPath id="clip1_1585_241">
          <path
            fill="currentColor"
            d="M0 0H22.8V22.8H0z"
            transform="translate(.6 .6)"
          ></path>
        </clipPath>
      </defs>
    </Icon>
);

export default TactilePaving;
