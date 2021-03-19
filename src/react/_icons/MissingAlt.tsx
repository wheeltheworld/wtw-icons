import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MissingAlt: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="currentColor"
                d="M12.5 1.5c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm-.8 6c0-.4.3-.8.8-.8.4 0 .8.3.8.8v6c0 .4-.3.8-.8.8-.4 0-.8-.3-.8-.8v-6zm.8 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
            />
        </g>
    </Icon>
);

export default MissingAlt;
