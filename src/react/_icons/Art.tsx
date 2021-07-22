import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Art: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
       <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M7 7H17V17H7z"></path>
        <path d="M19.723 2H22v2.277a1.984 1.984 0 000 3.446v2.554a1.984 1.984 0 000 3.446v2.554a1.984 1.984 0 000 3.446V22h-2.277a1.984 1.984 0 00-3.446 0h-2.554a1.984 1.984 0 00-3.446 0H7.723a1.984 1.984 0 00-3.446 0H2v-2.277a1.984 1.984 0 000-3.446v-2.554a1.984 1.984 0 000-3.446V7.723a1.984 1.984 0 000-3.446V2h2.277a1.984 1.984 0 003.446 0h2.554a1.984 1.984 0 003.446 0h2.554a1.984 1.984 0 003.446 0z"></path>
      </g>
    </Icon>
);

export default Art;
