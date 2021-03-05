import React from 'react';
import Icon from '../Icon';
import { IconComponent } from '../types';

const Ticket: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M7,16.2c0.9,1.1,0.8,2.5-0.3,3.4l2.6,3.1L23,11.2l-2.6-3.1C19.3,9,17.9,8.9,17,7.8s-0.8-2.5,0.3-3.4l-2.6-3.1
		L1,12.8l2.6,3.1C4.7,15,6.1,15.1,7,16.2z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M16,11.8l-5,4.2L8,12.2l5-4.2L16,11.8z"
            />
        </g>
    </Icon>
);

export default Ticket;
