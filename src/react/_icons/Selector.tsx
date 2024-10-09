import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Selector: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.57617" y="3.32074" width="8.35085" height="8.01642" rx="2" fill="black"/>
        <rect x="3.57617" y="12.798" width="8.35085" height="8.01642" rx="2" fill="black"/>
        <rect x="13.5857" y="3.32074" width="8.35085" height="8.01642" rx="2" fill="black"/>
        <rect x="13.5857" y="12.798" width="8.35085" height="8.01642" rx="2" fill="black"/>
      </svg>
    </Icon>
);

export default Selector;
