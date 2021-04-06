import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Phone: IconComponent = (props: any) => (
    <Icon  viewBox="0 0 24 24"{...props}>
       <svg
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
        >
      <path
        fill="none"
        stroke="currentColor"
        d="M15.1 13.9l-2.4 2.3c-1.2-.7-2.4-1.6-3.4-2.6s-1.9-2.2-2.6-3.4L9 7.8c.3-.3.4-.7.2-1.1L6.9 1.1C6.7.7 6.2.4 5.7.5L1.3 1.7c-.5.1-.8.5-.8 1 .3 5.2 2.4 10 6 13.7 3.7 3.6 8.6 5.8 13.7 6 .5 0 .9-.3 1-.8l1.2-4.4c.1-.5-.1-1-.6-1.2l-5.6-2.4c-.3-.1-.8 0-1.1.3z"
        className="st0"
        transform="translate(.5 .5)"
      ></path>
    </svg>
    </Icon>
);

export default Phone;
