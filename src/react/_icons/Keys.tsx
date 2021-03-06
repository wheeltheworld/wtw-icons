import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Keys: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill="currentColor"
            d="M27.59,1.76A11.33,11.33,0,0,0,17.19,17.6L1.34,33.45a.84.84,0,0,0-.25.6v4.71h0a.87.87,0,0,0,.25.58.92.92,0,0,0,.59.25H11a.85.85,0,0,0,.86-.86V35.18l2.89-1.08a1.2,1.2,0,0,0,.85-.85l.69-2.49h3.56a.85.85,0,0,0,.86-.86V25.83l2.34-2.34a11.12,11.12,0,0,0,4.51.94,11.34,11.34,0,0,0,0-22.67Zm0,1.71A9.62,9.62,0,1,1,23.28,21.7a.85.85,0,0,0-1,.16l-3,3a.86.86,0,0,0-.25.61v3.57H15.46a.86.86,0,0,0-.86.85l-.68,2.49L11,33.47c-.44.17-.85.39-.85.86V37.9H4L8.09,33.8a1.09,1.09,0,0,0,.13-.17L20.78,21.11a.85.85,0,0,0,0-1.21.82.82,0,0,0-.6-.25.85.85,0,0,0-.61.25L6.69,32.74a1.09,1.09,0,0,0-.13.17L2.8,36.67V34.41l16-16a.85.85,0,0,0,.16-1A9.62,9.62,0,0,1,27.59,3.47ZM29.9,6.76a4,4,0,1,0,2.85,1.17A4,4,0,0,0,29.9,6.76Zm0,1.71a2.31,2.31,0,1,1-1.63.67A2.32,2.32,0,0,1,29.9,8.47Z"
        />
    </Icon>
);

export default Keys;
