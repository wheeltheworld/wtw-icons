import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Night: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 25 25" {...props}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M16.643 18.454c-3.91-1.094-6.73-4.873-6.238-9.235a8.541 8.541 0 011.195-3.5c-2.753.725-4.807 3.03-5.118 5.786-.406 3.6 2.259 7.112 6.288 7.567a7.265 7.265 0 003.873-.617zM12.982 3.998c-4.03.236-7.414 3.28-7.873 7.352-.515 4.563 2.84 8.687 7.493 9.212a8.537 8.537 0 006.18-1.708c.663-.51.187-1.535-.615-1.626-3.968-.447-6.828-3.964-6.39-7.854a6.963 6.963 0 011.944-4.097 7.172 7.172 0 01.836-.734c.194-.145.14-.479-.091-.505a8.82 8.82 0 00-1.484-.04z"
            clipRule="evenodd"
        ></path>
    </Icon>
);

export default Night;
