import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Download: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V13.1893L15.4697 10.4697C15.7626 10.1768 16.2374 10.1768 16.5303 10.4697C16.8232 10.7626 16.8232 11.2374 16.5303 11.5303L12.5303 15.5303C12.4584 15.6022 12.3755 15.6565 12.2871 15.6931C12.1987 15.7298 12.1017 15.75 12 15.75C11.7929 15.75 11.6054 15.6661 11.4697 15.5303L7.46967 11.5303C7.17678 11.2374 7.17678 10.7626 7.46967 10.4697C7.76256 10.1768 8.23744 10.1768 8.53033 10.4697L11.25 13.1893V4C11.25 3.58579 11.5858 3.25 12 3.25Z"
            fill="currentColor"
        />
        <path
            d="M2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
            fill="currentColor"
        />
    </Icon>
);

export default Download;
