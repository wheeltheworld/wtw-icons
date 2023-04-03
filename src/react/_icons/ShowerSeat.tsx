import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ShowerSeat: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.5 8.3h6.8c0-1.9-1.5-3.4-3.4-3.4S6.5 6.4 6.5 8.3z"
        ></path>
         <path
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.5 21.75V4.2c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v.7M12 11.3v-.7M9.9 12.6v-.7M7.9 11.3v-.7M19.5 9v13.5m-.5-6.75h-6.25v6.75"
        ></path>
    </Icon>
);

export default ShowerSeat;
