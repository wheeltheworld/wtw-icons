import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowBack: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5438 4.61955C16.9343 5.01008 16.9343 5.64324 16.5438 6.03377L10.5775 12L16.5438 17.9662C16.9343 18.3568 16.9343 18.9899 16.5438 19.3804C16.1533 19.771 15.5201 19.771 15.1296 19.3804L8.45622 12.7071C8.0657 12.3166 8.0657 11.6834 8.45622 11.2929L15.1296 4.61955C15.5201 4.22903 16.1533 4.22903 16.5438 4.61955Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowBack;
