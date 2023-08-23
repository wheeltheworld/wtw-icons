import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Wallet: IconComponent = (props: any) => (
    <Icon fill="none" viewBox="0 0 40 40" {...props}>
      <g clipPath="url(#clip0_856_21786)">
        <path fill="#fff" d="M28.25 2l6 10-26.5-.5 15-9.5 3-1 2.5 1z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M28.177 4L15 11.5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M30.5 6.5L21 12"
        ></path>
        <path
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          d="M34 12H4a3 3 0 00-3 3v21a3 3 0 003 3h30a3 3 0 003-3V15a3 3 0 00-3-3z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M7 11.5L24.585 1.478a3 3 0 014.084 1.106l5.258 9.108"
        ></path>
        <path
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          d="M26 25.5a4.5 4.5 0 014.5-4.5H36a3 3 0 013 3v3a3 3 0 01-3 3h-5.5a4.5 4.5 0 01-4.5-4.5z"
        ></path>
        <rect width="3" height="3" x="29" y="24" fill="currentColor" rx="1.5"></rect>
      </g>
      <defs>
        <clipPath id="clip0_856_21786">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default Wallet;
