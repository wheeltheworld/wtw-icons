import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowForward: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.45622 19.3804C8.0657 18.9899 8.0657 18.3568 8.45622 17.9662L14.4225 12L8.45622 6.03377C8.0657 5.64324 8.0657 5.01008 8.45622 4.61955C8.84675 4.22903 9.47991 4.22903 9.87044 4.61955L16.5438 11.2929C16.9343 11.6834 16.9343 12.3166 16.5438 12.7071L9.87044 19.3804C9.47991 19.771 8.84675 19.771 8.45622 19.3804Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowForward;
