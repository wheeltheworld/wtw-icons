import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const News: IconComponent = (props) => (
    <Icon {...props} fill="none" viewBox="0 0 25 22">
        <g fill="none">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M7.938 3.945h13.8M7.938 17.037h13.8M7.938 12.413h6.9M7.938 8.57h6.9"
            ></path>
            <path
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M21.089 7.848h-3.362c-.294 0-.59.24-.59.601v4.024c0 .3.237.6.59.6h3.362c.295 0 .59-.24.59-.6V8.449c0-.3-.236-.6-.59-.6z"
            ></path>
            <path
                stroke="currentColor"
                strokeMiterlimit="10"
                d="M3.043 21.002h19.815c.59 0 1.061-.481 1.061-1.082V2.083c0-.601-.472-1.082-1.061-1.082H6.405c-.59 0-1.062.481-1.062 1.082v16.876c0 1.142-.884 2.043-2.005 2.043-1.12 0-2.005-.901-2.005-2.043V8.57h3.951"
            ></path>
        </g>
    </Icon>
);

export default News;
