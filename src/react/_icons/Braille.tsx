import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Braille: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <circle cx="6" cy="3" r="2" fill="none" strokeMiterlimit="10" data-cap="butt" />
            <circle cx="6" cy="21" r="2" fill="none" strokeMiterlimit="10" data-cap="butt" />
            <circle cx="18" cy="3" r="2" fill="none" strokeMiterlimit="10" data-cap="butt" />
            <circle cx="18" cy="12" r="2" fill="none" strokeMiterlimit="10" data-cap="butt" />
            <circle cx="6" cy="12" r="2" fill="currentColor" data-cap="butt" data-stroke="none" stroke="none" />
            <circle cx="18" cy="21" r="2" fill="currentColor" data-cap="butt" data-stroke="none" stroke="none" />
        </g>
    </Icon>
);

export default Braille;
