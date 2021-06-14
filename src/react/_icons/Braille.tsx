import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Braille: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <circle
                cx={6}
                cy={3}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <circle
                cx={6}
                cy={21}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <circle
                cx={18}
                cy={3}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <circle
                cx={18}
                cy={12}
                r={2}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <circle cx={6} cy={12} r={2} fill="currentColor" data-cap="butt" data-stroke="none" strokeLinecap="round" />
            <circle
                cx={18}
                cy={21}
                r={2}
                fill="currentColor"
                data-cap="butt"
                data-stroke="none"
                strokeLinecap="round"
            />
        </g>
    </Icon>
);

export default Braille;
