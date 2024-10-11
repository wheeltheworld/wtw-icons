import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowDown: IconComponent = (props) => (
    <Icon viewBox="0 0 25 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.785 7.95622C19.3945 7.5657 18.7614 7.5657 18.3708 7.95622L12.4046 13.9225L6.43837 7.95622C6.04784 7.5657 5.41468 7.5657 5.02415 7.95622C4.63363 8.34675 4.63363 8.97991 5.02415 9.37044L11.6975 16.0438C12.088 16.4343 12.7212 16.4343 13.1117 16.0438L19.785 9.37044C20.1756 8.97991 20.1756 8.34675 19.785 7.95622Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowDown;
