import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MobilePhone: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}> 
      <g stroke="currentColor" strokeWidth="1.5">
        <rect width="10.5" height="18.5" x="6.75" y="2.75" rx="1.25"></rect>
        <path strokeLinecap="round" d="M10 5h4"></path>
      </g>
    </Icon>
);

export default MobilePhone;
