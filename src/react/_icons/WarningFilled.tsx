import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WarningFilled: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="#D17F05"
            d="M12.5,1.5c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S18.6,1.5,12.5,1.5z M11.7,7.5c0-0.4,0.3-0.8,0.8-0.8 c0.4,0,0.8,0.3,0.8,0.8v6c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8V7.5z M12.5,18.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1 S13.1,18.5,12.5,18.5z"
        />
    </Icon>
);

export default WarningFilled;
