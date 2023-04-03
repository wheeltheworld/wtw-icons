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
        strokeWidth="1.5"
        clipPath="url(#clip0_785_41727)"
        fill="none"
      >
        <path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zM8.438 6.088V18M16.096 6.088V18"></path>
        <path d="M11.31 7.976c-1.38-.758-5.725-1.324-5.725 1.287 0 3.126 5.517 2.023 5.517 4.781 0 2.759-3.585 2.551-6.068 1.655M18.967 7.976c-1.38-.758-5.724-1.324-5.724 1.287 0 3.126 5.517 2.023 5.517 4.781 0 2.759-3.586 2.551-6.069 1.655"></path>
      </g>

    </Icon>
);

export default MoneyMoney;
