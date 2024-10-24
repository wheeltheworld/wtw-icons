import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Closet: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.25 3C3.25 2.58579 3.58579 2.25 4 2.25H20.3636C20.7779 2.25 21.1136 2.58579 21.1136 3V21C21.1136 21.4142 20.7779 21.75 20.3636 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21V3ZM4.75 15.2045V20.25H11.4321V15.2045H4.75ZM11.4321 13.7045H4.75V3.75H11.4321V13.7045ZM12.9321 3.75V20.25H19.6136V3.75H12.9321Z"
            fill="currentColor"
        />
    </Icon>
);

export default Closet;
