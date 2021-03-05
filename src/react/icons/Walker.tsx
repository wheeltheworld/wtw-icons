import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Walker: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <circle fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" cx="4.2" cy="19.5" r="3.1" />
        <circle fill="currentColor" cx="4.2" cy="19.5" r="0.6" />
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M21.3,22.5c0.6,0,1.2-0.5,1.2-1.2V20c0-0.3-0.1-0.6-0.4-0.8h0l-1-0.8c-0.1-0.1-0.2-0.2-0.3-0.2h0c-0.1,0.1-0.2,0.1-0.3,0.2l-1,0.8h0C19.1,19.4,19,19.7,19,20v1.4c0,0.6,0.5,1.2,1.2,1.2H21.3z"
        />
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M20.7,18.2L18.3,4.6c-0.3-1.8-1.7-3.1-3.4-3.1H9.4C7.7,1.5,6.3,2.8,6,4.6c0,0,0,0,0,0L4.2,16.2"
        />
        <line
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            x1="5.6"
            y1="7.1"
            x2="18.3"
            y2="7.1"
        />
    </Icon>
);

export default Walker;
