import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const OneHour: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="none">
            <path
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M11.983 23.2a11.193 11.193 0 01-10.504-7.385 11.14 11.14 0 01.37-8.55A11.248 11.248 0 0111.998.8a11.194 11.194 0 0110.497 7.371 11.131 11.131 0 01-.371 8.561 11.252 11.252 0 01-10.14 6.468v0z"
            ></path>
            <path
                fill="currentColor"
                d="M16.126 3.285a9.69 9.69 0 00-4.049-.913v9.45a.095.095 0 00.179.049l4.604-8.2a9.106 9.106 0 00-.734-.386z"
            ></path>
        </g>
    </Icon>
);

export default OneHour;
