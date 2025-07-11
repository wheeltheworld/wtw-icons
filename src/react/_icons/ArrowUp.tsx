import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowUp: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3804 16.0438C18.9899 16.4343 18.3568 16.4343 17.9662 16.0438L12 10.0775L6.03376 16.0438C5.64324 16.4343 5.01008 16.4343 4.61955 16.0438C4.22903 15.6533 4.22903 15.0201 4.61955 14.6296L11.2929 7.95622C11.6834 7.5657 12.3166 7.5657 12.7071 7.95622L19.3804 14.6296C19.771 15.0201 19.771 15.6533 19.3804 16.0438Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowUp;
