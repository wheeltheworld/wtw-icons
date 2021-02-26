import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const NotificationActive: IconComponent = (props ) => {
    return (
        <Icon viewBox="0 0 40 40" {...props}>
            <g>
                <path
                    fill="currentColor"
                    d="M31 20.55a.32.32 0 01.32.25c.12.7.21 1.29.34 1.87.19.82.4 1.64.65 2.44a5.19 5.19 0 002.78 3.31 2.47 2.47 0 011.43 2.3 1.4 1.4 0 01-1.26 1.52H4.3a2.59 2.59 0 01-1 0c-.37-.19-.86-.53-.93-.87a2.21 2.21 0 01.91-2.59c3-1.42 3.7-4.1 4-6.94s.41-5.65.53-8.48A11.8 11.8 0 0116.4 2.25c.37-.1.72-.22 1.05-.32.43-1.75 1.43-2.34 2.24-2.24S21.06.36 21.36 2a11.5 11.5 0 013.8 1.31.31.31 0 010 .5c-4 3.06-5.43 6.77-3.62 11.4a8.32 8.32 0 003.89 4.24 10 10 0 005.57 1.1zM13 34h11.9c.1 2.88-2.63 5.42-5.46 5.59A6 6 0 0113 34z"
                />
                <circle fill="red" cx="30.14" cy="11.64" r="7.57" />
            </g>
        </Icon>
    );
};

export default NotificationActive;
