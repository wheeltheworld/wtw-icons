import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Interior: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M3.8 4.4h16.3V19H3.8zM1 3.2l2.8 1.2M23 3.2l-2.9 1.2M1 20.8L3.8 19M23 20.8L20.1 19"
        />
    </Icon>
);

export default Interior;
