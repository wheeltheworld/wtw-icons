import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const StepFree: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <line
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            x1={1}
            y1={22}
            x2={23}
            y2={22}
        />
    </Icon>
);

export default StepFree;
