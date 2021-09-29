import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ServiceDog: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <g fill="none">
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14.7 9.4l4.9 2.4M19 6l-2-2-2.7 6.4c-.2.4-.5.6-.9.6H6c-1.1 0-2 .9-2 2v10h3v-2.8c0-.2 0-.3.1-.4L9 16l5.3 1.8c.4.1.7.5.7.9V23h3v-5l2-8h1c1.1 0 2-.9 2-2V6h-4zM12 8C8.7 8 6 5.3 6 2"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M1 8.2c0 1.7 1.3 3 3 3h1"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M13.8 11.1s.6 3.3-2.8 3.3h-.4c-3.4 0-2.8-3.3-2.8-3.3M18.8 14.3l-5-1.3"
      ></path>
        </g>
    </Icon>
);

export default ServiceDog;
