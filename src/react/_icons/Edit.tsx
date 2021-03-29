import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const EditIcon: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            className="nc-icon-wrapper"
            transform="translate(.5 .5)"
        >
            <path d="M2 23L22 23" data-color="color-2"></path>
            <path d="M8 18L3 19 4 14 16 2 20 6 8 18z"></path>
        </g>
    </Icon>
);

export default EditIcon;
