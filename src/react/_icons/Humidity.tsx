import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Humidity: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7178 5.80555L8.23334 11.1136C6.08317 14.3891 8.36134 18.7395 11.9988 18.7395C15.7881 18.7395 18.0336 14.0581 15.5615 10.8279L11.7178 5.80555ZM10.6572 4.68783C11.1298 3.968 12.1715 3.93031 12.6948 4.6141L16.7526 9.91622C19.8947 14.0218 17.1693 20.2395 11.9988 20.2395C7.03695 20.2395 4.24762 14.4519 6.97938 10.2905L10.6572 4.68783ZM15.0581 13.3151C15.4709 13.3492 15.778 13.7114 15.744 14.1242C15.6729 14.9862 15.3373 15.8052 14.7829 16.4692C14.2286 17.1332 13.4827 17.6097 12.6472 17.8336C12.2471 17.9408 11.8359 17.7033 11.7287 17.3033C11.6215 16.9032 11.8589 16.4919 12.259 16.3847C12.7959 16.2408 13.2752 15.9346 13.6315 15.5079C13.9877 15.0812 14.2034 14.5549 14.249 14.001C14.2831 13.5881 14.6453 13.2811 15.0581 13.3151Z"
            fill="currentColor"
        />
    </Icon>
);

export default Humidity;
