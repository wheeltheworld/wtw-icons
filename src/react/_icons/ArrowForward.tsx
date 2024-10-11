import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowForward: IconComponent = (props) => (
    <Icon viewBox="0 0 25 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.76543 19.3804C8.3749 18.9899 8.3749 18.3568 8.76543 17.9662L14.7317 12L8.76543 6.03377C8.3749 5.64324 8.3749 5.01008 8.76543 4.61955C9.15595 4.22903 9.78912 4.22903 10.1796 4.61955L16.853 11.2929C17.2435 11.6834 17.2435 12.3166 16.853 12.7071L10.1796 19.3804C9.78912 19.771 9.15595 19.771 8.76543 19.3804Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowForward;
