import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MoneyMoney: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <g
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        
        fill="none"
      >
        <path d="M8 15.333A7.333 7.333 0 108 .666a7.333 7.333 0 000 14.667z"></path>
        <path
          strokeWidth="0.851"
          d="M5.626 4.058V12M10.73 4.058V12M7.54 5.317c-.92-.505-3.816-.883-3.816.858 0 2.084 3.678 1.349 3.678 3.188 0 1.839-2.39 1.7-4.046 1.103M12.644 5.317c-.92-.505-3.815-.883-3.815.858 0 2.084 3.678 1.349 3.678 3.188 0 1.839-2.39 1.7-4.046 1.103"
        ></path>
      </g>

    </Icon>
);

export default MoneyMoney;
