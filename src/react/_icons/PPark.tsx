import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PPark: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
          <g stroke-linecap="round" stroke-width="1.5" fill="none" stroke="currentColor" stroke-linejoin="round" className="nc-icon-wrapper">
    <line x1="1" y1="20" x2="14" y2="20"></line>
    <line x1="3" y1="20" x2="3" y2="23"></line>
    <line x1="12" y1="20" x2="12" y2="23"></line>
    <line x1="19" y1="23" x2="19" y2="11" stroke="currentColor"></line>
    <rect x="3" y="12" width="9" height="4"></rect>
    <path d="M21.523,7.15A4.971,4.971,0,0,0,22,5c0-2.209-1.343-4-3-4s-3,1.791-3,4a4.971,4.971,0,0,0,.477,2.15A5.509,5.509,0,0,0,15,11c0,2.761,1.791,5,4,5s4-2.239,4-5A5.509,5.509,0,0,0,21.523,7.15Z" stroke="currentColor"></path>
  </g>
    </Icon>
);

export default PPark;