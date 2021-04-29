import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Plus: IconComponent = (props) => (
    <Icon viewBox="0 0 10 17" {...props} fill="none">
        <path
            d="M9.039 1L.999 8.663 9.04 16"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Icon>
);

export default Plus;
