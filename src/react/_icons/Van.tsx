import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Van: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M21.712 15.315c.793-.099 1.288-.792 1.288-1.585 0-.793 0-1.289-.396-1.883 0-.1-.1-.1-.1-.1-.693-.891-1.783-1.486-2.973-1.486h-.495l-3.37-3.27C14.974 6.396 14.18 6 13.289 6H2.784C1.793 6 1 6.793 1 7.784v5.748c.198.891.991 1.684 1.982 1.684M7.541 15.315h9.613M18.739 10.261H1.396M10.712 6.1v3.864M15.468 12.838H9.324"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M5.261 17.99a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36zM19.235 17.99a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36z"
        ></path>
    </Icon>
);

export default Van;
