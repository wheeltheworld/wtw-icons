import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Linkedin: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="#007BB5"
                d="M22.2,0H1.8C0.8,0,0,0.8,0,1.7v20.5c0,1,0.8,1.7,1.8,1.7h20.5c1,0,1.8-0.8,1.8-1.7V1.7C24,0.8,23.2,0,22.2,0z"
            />
            <path
                fill="#FFFFFF"
                d="M3.6,9h3.6v11.5H3.6V9z M5.3,3.3c1.1,0,2.1,0.9,2.1,2.1c0,1.1-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1 C3.3,4.2,4.2,3.3,5.3,3.3"
            />
            <path
                fill="#FFFFFF"
                d="M9.4,9h3.4v1.6h0c0.5-0.9,1.6-1.8,3.4-1.8c3.6,0,4.3,2.4,4.3,5.5v6.3h-3.6v-5.6c0-1.3,0-3-1.8-3 c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4C9.4,20.5,9.4,9,9.4,9z"
            />
        </g>
    </Icon>
);

export default Linkedin;
