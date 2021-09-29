import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Work: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
           <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
        transform="translate(.5 .5)"
      >
        <path d="M16 7L16 2 8 2 8 7" data-color="color-2"></path>
        <path d="M1 7H23V22H1z"></path>
        <path d="M5 7L5 22"></path>
        <path d="M19 7L19 22"></path>
      </g>
    </Icon>
);

export default Work;
