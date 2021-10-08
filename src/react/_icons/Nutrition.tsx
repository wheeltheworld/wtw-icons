import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Nutrition: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
         <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M10 23L2 23 2 1 20 1 20 5"></path>
        <path d="M7 7L13 7"></path>
        <path d="M7 12L10 12"></path>
        <path d="M7 17L8 17"></path>
        <path d="M18 22.567l1.084.338a2 2 0 002.487-1.163l1.247-3.5c.875-2.456-1.549-4.824-4.209-4.113l-.609.162-.609-.163c-2.66-.711-5.084 1.657-4.209 4.113l1.247 3.5a2 2 0 002.487 1.159z"></path>
        <path
          fill="currentColor"
          stroke="none"
          d="M21 8v1a3 3 0 01-3 3v-1a3 3 0 013-3z"
        ></path>
      </g>
    </Icon>
);

export default Nutrition;
