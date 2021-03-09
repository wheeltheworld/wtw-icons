import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LocationBlack: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                fill="#232323"
                d="M12.5 1.5c-3.9 0-8 2.9-8 8 0 4.9 8 13 8 13s8-8.1 8-13c0-5.1-4.1-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
            ></path>
        </g>
    </Icon>
);

export default LocationBlack;
