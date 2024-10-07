import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowBack: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6857 7.21967C14.9786 7.51256 14.9786 7.98744 14.6857 8.28033L11.216 11.75L14.6857 15.2197C14.9786 15.5126 14.9786 15.9874 14.6857 16.2803C14.3928 16.5732 13.9179 16.5732 13.6251 16.2803L9.09473 11.75L13.6251 7.21967C13.9179 6.92678 14.3928 6.92678 14.6857 7.21967Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowBack;
