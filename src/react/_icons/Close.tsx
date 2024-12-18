import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Close: IconComponent = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="none" className="nc-icon-wrapper">
      <path d="M21 3L3 21" stroke="currentColor" stroke-width="2.769" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 21L3 3" stroke="currentColor" stroke-width="2.769" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </Icon>
);

export default Close;
