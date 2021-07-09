import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Clothes: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
         <g
        fill="none"
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M14 9L16 9"></path>
        <path d="M5 20L5 11"></path>
        <path d="M19 20L19 11"></path>
        <path d="M1 17L5 17"></path>
        <path d="M19 17L23 17"></path>
        <path d="M16 1c0 2.2-1.8 4-4 4S8 3.2 8 1H4C2.3 1 1 2.3 1 4v16h4v3h14v-3h4V4c0-1.7-1.3-3-3-3h-4z"></path>
      </g>
    </Icon>
);

export default Clothes;
