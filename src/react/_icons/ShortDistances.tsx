import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ShortDistances: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none" clipPath="url(#clip0)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.317 20.556H3.147"
        ></path>
        <path
          fill="currentColor"
          d="M2.7 22.73a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2z"
        ></path>
        <path
          fill="currentColor"
          d="M20.836 22.504c-.406 0-.803-.114-1.141-.329a1.975 1.975 0 01-.757-.874 1.854 1.854 0 01-.116-1.125c.079-.378.274-.725.562-.998a2.092 2.092 0 011.052-.533 2.158 2.158 0 011.187.111c.375.147.696.397.922.717.225.32.346.697.346 1.083 0 .516-.217 1.012-.602 1.377-.385.366-.908.57-1.453.57z"
        ></path>
        <path
          fill="currentColor"
          d="M20.42 19.335a1.065 1.065 0 11-1.046 1.046 1.045 1.045 0 011.045-1.046zm0-1.935a3 3 0 102.98 2.98 2.98 2.98 0 00-2.98-2.98z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
);

export default ShortDistances;
