import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Minus: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g stroke="currentColor" fill="none">
        <path
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
          clipRule="evenodd"
        ></path>
        <path strokeLinecap="round" d="M8.7 12h6.6"></path>
        </g>
    </Icon>
);

export default Minus;
