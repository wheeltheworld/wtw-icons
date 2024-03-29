import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const NoFees: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
        ></path>
        <path
            fill="currentColor"
            d="M12.7 12.1V19c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-5.4M11.2 10V5c0-.4.3-.7.8-.7s.8.3.8.7v3.4L11.2 10z"
        ></path>
        <path
            fill="currentColor"
            d="M9.7 11.6c-1-.6-1.8-1.4-1.8-2.9 0-1.1.5-1.9 1.4-2.4 1.6-.9 4.1-.6 5.6-.1l-1.2 1.2c-1.2-.2-2.8-.3-3.7.2-.4.3-.6.6-.6 1.1 0 .9.5 1.4 1.4 1.8l-1.1 1.1zM13.4 11.4c.1 0 .1.1.2.1 1.2.5 2.3 1.3 2.3 2.8 0 1.1-.4 2.1-1.3 2.6-.8.5-1.8.8-2.9.8-1.3 0-2.8-.3-4-.8l1.2-1.2c1.7.5 3.8.7 4.8 0 .4-.3.6-.8.6-1.4 0-.8-.6-1.2-2-1.7-.1 0-.1 0-.2-.1l1.3-1.1z"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M18.8 3.9l-14.2 15"
        ></path>
    </Icon>
);

export default NoFees;
