import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const RoomAccess: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5px"
                d="M14.5 18.77H3.85V4.16h16.28v14.61H14.5zM1 3l2.85 1.16M23 3l-2.85 1.16M1 20.6l2.85-1.83M22.98 20.6l-2.85-1.83M11 14H9"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5px"
                d="M9 9.72h6v9H9v-9z"
            />
        </g>
    </Icon>
);

export default RoomAccess;
