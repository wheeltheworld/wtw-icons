import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ContrastMarking: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 31 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 .75h27M4.25.75v22.5M26.75.75v22.5M2 23.25h27M15.5.75v22.5M7.233 17.545l1.574-1.577M8.256 20.507l4.234-4.217M19.564 5.843l1.59-1.577M20.603 8.805l4.234-4.201"
      ></path>
      <path
        fill="currentColor"
        d="M5.75 11.25H5v1.5h.75v-1.5zm8.25 1.5h.75v-1.5H14v1.5zm-8.25 0H7.4v-1.5H5.75v1.5zm2.475 0h3.3v-1.5h-3.3v1.5zm4.125 0H14v-1.5h-1.65v1.5zM17 11.25h-.75v1.5H17v-1.5zm8.25 1.5H26v-1.5h-.75v1.5zm-8.25 0h1.65v-1.5H17v1.5zm2.475 0h3.3v-1.5h-3.3v1.5zm4.125 0h1.65v-1.5H23.6v1.5z"
      ></path>
    </Icon>
);

export default ContrastMarking;
