import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Pinterest: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path fill="#FFFFFF" d="M24,12c0,6.6-5.4,12-12,12S0,18.6,0,12C0,5.4,5.4,0,12,0S24,5.4,24,12" />
            <path
                fill="#BD081C"
                d="M12,1.1C6,1.1,1.1,6,1.1,12c0,4.6,2.9,8.5,6.9,10.1c-0.1-0.9-0.2-2.2,0-3.1c0.2-0.8,1.3-5.4,1.3-5.4S9,13,9,12 c0-1.5,0.9-2.6,2-2.6c0.9,0,1.4,0.7,1.4,1.5c0,0.9-0.6,2.3-0.9,3.6c-0.3,1.1,0.5,2,1.6,2c1.9,0,3.4-2,3.4-5c0-2.6-1.9-4.4-4.5-4.4 C8.8,7.1,7,9.4,7,11.8c0,0.9,0.4,1.9,0.8,2.5c0.1,0.1,0.1,0.2,0.1,0.3c-0.1,0.3-0.3,1.1-0.3,1.2C7.6,16,7.5,16,7.2,16 C5.9,15.3,5,13.3,5,11.7c0-3.4,2.5-6.6,7.2-6.6c3.8,0,6.7,2.7,6.7,6.3c0,3.7-2.4,6.8-5.6,6.8c-1.1,0-2.1-0.6-2.5-1.2 c0,0-0.5,2.1-0.7,2.6c-0.2,0.9-0.9,2.1-1.4,2.9c1,0.3,2.1,0.5,3.2,0.5c6,0,10.9-4.9,10.9-10.9C22.9,6,18,1.1,12,1.1z"
            />
        </g>
    </Icon>
);

export default Pinterest;
