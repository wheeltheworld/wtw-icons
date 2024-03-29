import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const NoPhone: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props} style={{ fill: 'none' }}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M15.326 14.271l-2.194 2.104a15.58 15.58 0 01-3.11-2.378 15.58 15.58 0 01-2.377-3.109l2.103-2.195c.275-.274.366-.64.183-1.006l-2.103-5.12c-.183-.366-.64-.64-1.098-.55L2.707 3.116c-.457.092-.732.457-.732.915.275 4.755 2.195 9.144 5.487 12.528 3.383 3.292 7.864 5.303 12.528 5.486.457 0 .823-.274.914-.731l1.098-4.024c.091-.457-.092-.914-.549-1.097l-5.12-2.195c-.275-.091-.732 0-1.007.274z"
        ></path>
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 9l6-6M20 9l-6-6"></path>
    </Icon>
);

export default NoPhone;
