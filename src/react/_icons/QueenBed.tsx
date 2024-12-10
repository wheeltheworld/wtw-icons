import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const QueenBed: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 3.75C5.58579 3.75 5.25 4.08579 5.25 4.5V8.84606L3.06718 13.9393C3.02403 14.034 3 14.1392 3 14.25V19.5C3 19.9142 3.33579 20.25 3.75 20.25C4.16421 20.25 4.5 19.9142 4.5 19.5V18H19.5V19.5C19.5 19.9142 19.8358 20.25 20.25 20.25C20.6642 20.25 21 19.9142 21 19.5V14.25C21 14.2384 20.9997 14.2268 20.9992 14.2153C20.9947 14.1172 20.9714 14.024 20.9328 13.9393L18.75 8.84606V4.5C18.75 4.08579 18.4142 3.75 18 3.75H6ZM4.5 16.5H19.5V15H4.5V16.5ZM4.8874 13.5H19.1126L17.5055 9.75H6.49455L4.8874 13.5ZM6.75 8.25V5.25H17.25V8.25H6.75Z"
            fill="currentColor"
        />
    </Icon>
);

export default QueenBed;
