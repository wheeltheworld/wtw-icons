import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LastMinute: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M12.8132 9.0571H11.1877V14.5199H15.9177V12.8944H12.8132V9.0571Z" fill="currentColor" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4832 3.05103V4.67656H12.971V5.85044C16.6987 6.32713 19.58 9.51151 19.58 13.3688C19.58 17.5552 16.1863 20.9489 11.9999 20.9489C7.81361 20.9489 4.41992 17.5552 4.41992 13.3688C4.41992 9.40301 7.46554 6.14851 11.3454 5.81669V4.67656H9.89658V3.05103H14.4832ZM17.9544 13.3688C17.9544 16.6574 15.2885 19.3233 11.9999 19.3233C8.71137 19.3233 6.04546 16.6574 6.04546 13.3688C6.04546 10.0803 8.71137 7.41436 11.9999 7.41436C15.2885 7.41436 17.9544 10.0803 17.9544 13.3688Z"
            fill="currentColor"
        />
    </Icon>
);

export default LastMinute;
