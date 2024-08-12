import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Listings: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <svg width="24" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.0293 15H20.0293" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M3.0293 18H12.0293" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <rect x="3.0293" y="3" width="8" height="8" rx="2" stroke="#232323" stroke-width="1.5"/>
      </svg>
    </Icon>
);

export default Listings;
