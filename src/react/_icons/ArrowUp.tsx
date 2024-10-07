import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowUp: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2803 14.5909C15.9874 14.8838 15.5126 14.8838 15.2197 14.5909L11.75 11.1213L8.28033 14.5909C7.98744 14.8838 7.51256 14.8838 7.21967 14.5909C6.92678 14.298 6.92678 13.8232 7.21967 13.5303L11.75 8.99994L16.2803 13.5303C16.5732 13.8232 16.5732 14.298 16.2803 14.5909Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowUp;
