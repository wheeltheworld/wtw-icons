import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const InProgress: IconComponent = (props) => {
  return <Icon fill="none" viewBox="0 0 24 24" {...props}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14 19l2.95 2.95a3.501 3.501 0 004.95.05l.051-.051A3.5 3.5 0 0022 17l-.051-.051L20 15M11.49 8.866L4.204 1.578 1.66 4.12l7.118 7.118"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M22.678 4.922L19.6 7.987 16 4.411l3.08-3.066a4.214 4.214 0 00-2.26-.307 5.615 5.615 0 00-5.132 5.723c-.006.562.1 1.119.312 1.639l-9.855 8.683a3.419 3.419 0 00-.276 4.827l.07.078a3.285 3.285 0 004.648.1c.1-.094.194-.194.28-.3l8.727-9.81a6.717 6.717 0 002.875.2 5.687 5.687 0 004.31-3.986 5.088 5.088 0 00-.101-3.27v0z"
        ></path>
    </Icon>
};

export default InProgress;
