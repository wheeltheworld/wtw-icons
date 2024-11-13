import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Other: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.6001 6.44995C9.18588 6.44995 8.8501 6.78574 8.8501 7.19995V16.8C8.8501 17.2142 9.18588 17.55 9.6001 17.55H14.4001C14.8143 17.55 15.1501 17.2142 15.1501 16.8V7.19995C15.1501 6.78574 14.8143 6.44995 14.4001 6.44995H9.6001ZM10.3501 11.6686V16.05H13.6501V11.6686H10.3501Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 3.25C3.58579 3.25 3.25 3.58579 3.25 4V20C3.25 20.4143 3.58579 20.75 4 20.75H20C20.4143 20.75 20.75 20.4143 20.75 20V4C20.75 3.58579 20.4143 3.25 20 3.25H4ZM4.75 19.25V4.75H19.25V19.25H4.75Z"
            fill="currentColor"
        />
    </Icon>
);

export default Other;
