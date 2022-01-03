import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TwoHours: IconComponent = (props) => (
    <Icon viewBox="0 0 31 30" {...props}>
        <g clipPath="url(#clip0_10728_11379)">
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15.5 29c-2.875 0-5.625-.875-8-2.5s-4.125-4-5.125-6.625c-.625-1.875-1-3.625-.875-5.5s.5-3.625 1.25-5.25c1.25-2.5 3-4.5 5.25-5.875S12.875 1 15.5 1c2.875 0 5.625.875 8 2.5s4.125 4 5.125 6.625c.625 1.75.875 3.5.875 5.375-.125 1.875-.5 3.625-1.25 5.25-1.125 2.375-2.875 4.5-5.125 5.875C20.75 28.25 18.125 29 15.5 29z"
        ></path>
        <path
          fill="currentColor"
          d="M15.625 14.75c0 .125 0 .25.125.25H16l10-6.125A3.799 3.799 0 0025.375 8 13.002 13.002 0 0021.5 4.5c-.25-.125-.625-.375-.875-.5-1.625-.75-3.25-1.125-5-1.125V14.75z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_10728_11379">
          <path fill="currentColor" d="M0 0H30V30H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default TwoHours;
