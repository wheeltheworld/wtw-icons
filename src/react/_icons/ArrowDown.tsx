import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowDown: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8804 7.95622C19.4899 7.5657 18.8568 7.5657 18.4662 7.95622L12.5 13.9225L6.53377 7.95622C6.14324 7.5657 5.51008 7.5657 5.11955 7.95622C4.72903 8.34675 4.72903 8.97991 5.11955 9.37044L11.7929 16.0438C12.1834 16.4343 12.8166 16.4343 13.2071 16.0438L19.8804 9.37044C20.271 8.97991 20.271 8.34675 19.8804 7.95622Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowDown;
