import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Mirror: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g fill="none">
            <path
                d="M26.6667 2H13.3333C11.4924 2 10 3.49238 10 5.33333V27C10 28.841 11.4924 30.3333 13.3333 30.3333H26.6667C28.5076 30.3333 30 28.841 30 27V5.33333C30 3.49238 28.5076 2 26.6667 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.6667 8.66675L10 20.3334L11.6667 18.6667"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M20 23.6667L30 13.6667L28.3333 15.3334"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5 2V38.6667"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M35 2V38.6667"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5 35.3333H35"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
    </Icon>
);

export default Mirror;
