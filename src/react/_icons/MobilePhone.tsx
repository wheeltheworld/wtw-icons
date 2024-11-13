import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MobilePhone: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            d="M10 4.25C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75H14C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25H10Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V4ZM8 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V20C16.5 20.2761 16.2761 20.5 16 20.5H8C7.72386 20.5 7.5 20.2761 7.5 20V4C7.5 3.72386 7.72386 3.5 8 3.5Z"
            fill="currentColor"
        />
    </Icon>
);

export default MobilePhone;
