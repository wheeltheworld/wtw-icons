import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowBack: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0438 4.61955C16.4343 5.01008 16.4343 5.64324 16.0438 6.03377L10.0775 12L16.0438 17.9662C16.4343 18.3568 16.4343 18.9899 16.0438 19.3804C15.6533 19.771 15.0201 19.771 14.6296 19.3804L7.95622 12.7071C7.5657 12.3166 7.5657 11.6834 7.95622 11.2929L14.6296 4.61955C15.0201 4.22903 15.6533 4.22903 16.0438 4.61955Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowBack;
