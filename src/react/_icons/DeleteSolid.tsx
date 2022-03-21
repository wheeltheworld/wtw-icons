import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const DeleteSolid: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="currentColor" className="nc-icon-wrapper">
            <path d="M3.87 21.214A3.01 3.01 0 006.862 24h10.276a3.01 3.01 0 002.992-2.786L21.074 8H2.926z"></path>
            <path
                d="M23 4h-6V1a1 1 0 00-1-1H8a1 1 0 00-1 1v3H1a1 1 0 000 2h22a1 1 0 000-2zM9 2h6v2H9z"
                data-color="color-2"
            ></path>
        </g>
    </Icon>
);

export default DeleteSolid;
