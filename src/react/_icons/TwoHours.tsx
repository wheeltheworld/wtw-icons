import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TwoHours: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
        <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M19.617 7.175a9.05 9.05 0 011.4 4.074l-8.19.031V3.057a9.023 9.023 0 012.995.806l.317-.68-.316.68a9.048 9.048 0 013.794 3.312z"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.982 23.2a11.07 11.07 0 01-4.718-1.05A11.199 11.199 0 014.996 3.26 11.197 11.197 0 0112.01.8a11.197 11.197 0 0110.498 7.371 11.127 11.127 0 01-.37 8.561A11.252 11.252 0 0111.981 23.2z"
      ></path>
        </g>
    </Icon>
);

export default TwoHours;
