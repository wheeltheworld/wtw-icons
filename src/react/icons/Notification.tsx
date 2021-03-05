import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Notification: IconComponent = (props) => {
    return (
        <Icon viewBox="0 0 40 40" {...props}>
            <path
                fill="currentColor"
                d="M13.62 34h11.87c.09 2.88-2.63 5.42-5.46 5.59A6 6 0 0113.62 34zM35.69 28.42a5.19 5.19 0 01-2.78-3.31 2.23 2.23 0 00-.14-.34c-2.14-5.11.12-11.62-3-17.27a9.7 9.7 0 00-5.48-4.84A12 12 0 0022 2c-.35-1.64-.82-2.2-1.72-2.31S18.47.18 18 1.93c-.33.1-.68.22-1.05.32a11.8 11.8 0 00-8.53 11.08c-.12 2.83-.2 5.67-.53 8.48s-1 5.52-4 6.94A2.21 2.21 0 003 31.34c.07.34.56.68.93.87a2.59 2.59 0 001 0h31a1.4 1.4 0 001.26-1.52 2.47 2.47 0 00-1.5-2.27z"
            />
        </Icon>
    );
};

export default Notification;
