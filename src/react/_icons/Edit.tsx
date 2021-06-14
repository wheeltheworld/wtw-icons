import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Edit: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line data-color="color-2" x1={2} y1={23} x2={22} y2={23} fill="none" strokeMiterlimit={10} />
            <polygon points="8 18 3 19 4 14 16 2 20 6 8 18" fill="none" stroke="currentColor" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Edit;
