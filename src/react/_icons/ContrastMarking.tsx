import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ContrastMarking: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
       <g clipPath="url(#clip0_1585_207)">
        <g clipPath="url(#clip1_1585_207)">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.2 5.4h21.6M3 5.4v18M21 5.4v18M1.2 23.4h21.6M12 5.4v18M5.387 18.836l1.259-1.262M6.204 21.206l3.388-3.374M15.252 9.474l1.271-1.262M16.082 11.844l3.388-3.361"
          ></path>
          <path
            fill="currentColor"
            d="M4.2 13.65h-.75v1.5h.75v-1.5zm6.6 1.5h.75v-1.5h-.75v1.5zm-6.6 0h2.64v-1.5H4.2v1.5zm3.96 0h2.64v-1.5H8.16v1.5zM13.2 13.65h-.75v1.5h.75v-1.5zm6.6 1.5h.75v-1.5h-.75v1.5zm-6.6 0h2.64v-1.5H13.2v1.5zm3.96 0h2.64v-1.5h-2.64v1.5z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1585_207">
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
        <clipPath id="clip1_1585_207">
          <path
            fill="currentColor"
            d="M0 0H24V19.2H0z"
            transform="translate(0 4.8)"
          ></path>
        </clipPath>
      </defs>
    </Icon>
);

export default ContrastMarking;
