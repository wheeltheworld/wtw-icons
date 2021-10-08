import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PregnantWoman: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
         <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <circle cx="11" cy="3" r="2" data-cap="butt"></circle>
        <path d="M10 20L10 23 12 23 13 20" data-cap="butt"></path>
        <path d="M7.6 16.774L7 20h9l-.689-2.756a3.977 3.977 0 00-1.44-5.759l-.492-1.97A2 2 0 0011.438 8h-1.2a2 2 0 00-1.791 1.106L7 12l4 2"></path>
      </g>
    </Icon>
);

export default PregnantWoman;
