import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WrittenInformation: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 31 30"
    >
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.25 8.75h12.5M9.25 15h12.5M9.25 21.25h7.5M25.5 28.75h-20a2.5 2.5 0 01-2.5-2.5V3.75a2.5 2.5 0 012.5-2.5h20a2.5 2.5 0 012.5 2.5v22.5a2.5 2.5 0 01-2.5 2.5z"
      ></path>
    </Icon>
);

export default WrittenInformation;
