import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Coupon: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
            <path d="M19.3333 12C19.3333 10.4417 20.525 9.25002 22.0833 9.25002V4.66669H1.91663V9.25002C3.47496 9.25002 4.66663 10.4417 4.66663 12C4.66663 13.5584 3.47496 14.75 1.91663 14.75V19.3334H22.0833V14.75C20.525 14.75 19.3333 13.5584 19.3333 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.75 9.25L9.25 14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.70825 10.1667C10.4676 10.1667 11.0833 9.55108 11.0833 8.79169C11.0833 8.0323 10.4676 7.41669 9.70825 7.41669C8.94886 7.41669 8.33325 8.0323 8.33325 8.79169C8.33325 9.55108 8.94886 10.1667 9.70825 10.1667Z" fill="currentColor"/>
            <path d="M14.2916 16.5834C15.051 16.5834 15.6666 15.9678 15.6666 15.2084C15.6666 14.449 15.051 13.8334 14.2916 13.8334C13.5322 13.8334 12.9166 14.449 12.9166 15.2084C12.9166 15.9678 13.5322 16.5834 14.2916 16.5834Z" fill="currentColor"/>
        </g>
    </Icon>
);

export default Coupon;