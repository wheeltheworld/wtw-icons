import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const StarFull: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)">
            <polygon
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                points="11.5,1.04 14.9,7.93 22.5,9.03 17,14.39 18.3,21.96 11.5,18.39 4.7,21.96 6,14.39 0.5,9.03 8.1,7.93  "
            />
        </g>
    </Icon>
);

export default StarFull;
