import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Done: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="currentColor">
            <path
                d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"
                fill="currentColor"
            />
        </g>
    </Icon>
);

export default Done;
