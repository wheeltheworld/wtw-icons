import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const YoutubeBlack: IconComponent = ({ ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24">
        <path
        d="M23.8 7.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1-3.4-.2-8.4-.2-8.4-.2s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.1 0 11.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9V11c0-1.9-.2-3.8-.2-3.8zM9.5 15.1V8.4l6.5 3.4-6.5 3.3z"
        className="0"
        fill="#232323"
      ></path>
    </svg>
    </Icon>
);
export default YoutubeBlack;