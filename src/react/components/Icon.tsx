import React from 'react';
import { IconComponent } from '../types';

const Icon: IconComponent = ({ children, width, height, style, ...props }) => {
    return (
        <svg
            {...props}
            width={width || '100px'}
            height={height || '100px'}
            style={{ maxHeight: '100%', maxWidth: '100%', ...style }}
        >
            {children}
        </svg>
    );
};

export default Icon;
