import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ValetParking: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                d="M13.476,15H19c2.817,0,3,2,3,2L10.235,21.525a3,3,0,0,1-2.419-.117L1,18V11H2c1.105,0,3.906.438,5,2h3a4,4,0,0,1,4,4H7"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M11.65,4a3.5,3.5,0,1,0,0,3H14l1.5,1L17,7h2l1-3Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <circle
                cx={8.5}
                cy={5.5}
                r={1}
                fill="currentColor"
                data-cap="butt"
                data-color="color-2"
                data-stroke="none"
                strokeLinecap="round"
            />
        </g>
    </Icon>
);

export default ValetParking;
