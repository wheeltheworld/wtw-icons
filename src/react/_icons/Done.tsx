import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Done: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill="#00a000"
            d="M20 2.41A18.6 18.6 0 1038.6 21 18.6 18.6 0 0020 2.41zm11.77 15.66l-.07.06-13.95 11.62a2.48 2.48 0 01-1.85.53 2.36 2.36 0 01-1.6-1l-4.65-7a2.33 2.33 0 113.83-2.64v.06l3.2 4.83 12-10a2.33 2.33 0 013.07 3.51z"
        />
    </Icon>
);

export default Done;
