import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LastMinute: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 25 25" {...props}>
         <path
        fill={fill}
        d="M13.75 8.36h-1.912v6.426h5.564v-1.913H13.75V8.36z"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M15.715 1.294v1.913h-1.78v1.38a8.918 8.918 0 01-1.142 17.761 8.917 8.917 0 01-.77-17.8V3.207H10.32V1.294h5.396zm4.083 12.137a7.004 7.004 0 11-14.009 0 7.004 7.004 0 0114.009 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
);

export default LastMinute;
