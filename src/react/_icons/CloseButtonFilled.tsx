import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const CloseButtonFilled: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none" className="nc-icon-wrapper">
            <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"
            clipRule="evenodd"
        ></path>
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 8l-8 8M16 16L8 8"
        ></path>
      </g>
    </Icon>
);

export default CloseButtonFilled;
