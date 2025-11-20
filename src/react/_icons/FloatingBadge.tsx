import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const FloatingBadge: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <svg width="24" height="24" viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#fff" d="M20 24.5a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6"></path>

            <path
                fill="url(#paint0_linear_1600_111)"
                d="M24.5 8.9s3.5 2.4 3.5 6.5-3.6 8-7.3 8-5.5-2.8-5.5-2.8S27.7 18 24.5 9z"
            ></path>

            <path
                fill="currentColor"
                d="m31.4 13.3-.2-.4q-.45-.75-.6-1.8v-.5c-.2-1.6-1.3-3-2.8-3.6l-.4-.2c-.6-.3-1.1-.6-1.5-1.1l-.3-.4c-1.1-1.2-2.7-1.7-4.3-1.3h-.5c-.6.2-1.2.2-1.9.1h-.5c-1.6-.4-3.2.2-4.3 1.3l-.3.4c-.4.5-.9.8-1.5 1.1l-.4.2c-1.5.7-2.5 2.1-2.6 3.7v.5q-.15.9-.6 1.8l-.2.4c-.8 1.4-.8 3.1 0 4.5l.2.4q.45.75.6 1.8v.5c.2 1.6 1.3 3 2.8 3.6l.4.2c.6.2 1.1.6 1.5 1.1l.3.4c1.1 1.2 2.8 1.7 4.3 1.3h.5c.6-.2 1.2-.2 1.8-.1h.5c1.6.4 3.2-.1 4.3-1.3l.3-.4c.4-.5.9-.8 1.5-1.1l.4-.2c1.5-.7 2.5-2.1 2.6-3.7V20q.15-.9.6-1.8l.2-.4c.8-1.4.8-3.1 0-4.5zM20 24.3c-4.8 0-8.6-3.8-8.6-8.6s3.9-8.6 8.6-8.6 8.6 3.8 8.6 8.6-3.8 8.6-8.6 8.6"
            ></path>

            <path
                fill="currentColor"
                d="M23.9 19.3h-2.4v-3.6c0-.6 0-1.6-1.4-1.6s-1.7.6-1.7 1.9v3.4h-2.2v-7.1h2.2v1.2c.3-.5.9-1.4 2.5-1.4s3.1.9 3.1 2.8v4.6zM13.6 23.4 9 33.3c-.2.3.1.7.5.6l3.6-.9c.2 0 .4 0 .5.2l1.9 3.5c.2.3.6.3.8 0l4.6-9.9z"
            ></path>

            <path
                fill="currentColor"
                d="m26.4 23.4 4.6 9.9c.2.3-.1.7-.5.6l-3.6-.9c-.2 0-.4 0-.5.2l-1.9 3.5c-.2.3-.6.3-.8 0l-4.6-9.9z"
            ></path>

            <path
                fill="currentColor"
                d="M20 41.6c6.793 0 12.3-.672 12.3-1.5s-5.507-1.5-12.3-1.5-12.3.672-12.3 1.5 5.507 1.5 12.3 1.5"
            ></path>

            <defs>
                <linearGradient
                    id="paint0_linear_1600_111"
                    x1="16"
                    x2="28.4"
                    y1="19.7"
                    y2="13.7"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#E0F4F5"></stop>
                </linearGradient>
            </defs>
        </svg>
    </Icon>
);

export default FloatingBadge;
