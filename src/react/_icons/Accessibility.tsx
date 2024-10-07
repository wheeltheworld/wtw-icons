import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Accessibility: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5"></circle>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5">
            <path strokeLinecap="round" d="M15.5 18.9l-1.6-5"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.1 9H13.899999999999999V13.9H10.1z"></path>
            <circle cx="12" cy="5.7" r="1.4"></circle>
            <path strokeLinecap="round" d="M13.9 9l3.7-.8M6.3 8.1l3.8.9M10.1 13.9l-1.6 5"></path>
        </g>
    </Icon>
);

export default Accessibility;
