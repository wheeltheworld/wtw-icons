import React from 'react';
import { IconComponent } from './types';

const Icon: IconComponent = ({ children, width, height, ...props }) => {
    return (
        <svg {...props} width={width || '100px'} height={height || '100px'}>
            {children}
        </svg>
    );
};

export default Icon;
