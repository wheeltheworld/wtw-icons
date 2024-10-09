import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowUp: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8804 16.0438C19.4899 16.4343 18.8568 16.4343 18.4662 16.0438L12.5 10.0775L6.53377 16.0438C6.14324 16.4343 5.51008 16.4343 5.11955 16.0438C4.72903 15.6533 4.72903 15.0201 5.11955 14.6296L11.7929 7.95622C12.1834 7.5657 12.8166 7.5657 13.2071 7.95622L19.8804 14.6296C20.271 15.0201 20.271 15.6533 19.8804 16.0438Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowUp;
