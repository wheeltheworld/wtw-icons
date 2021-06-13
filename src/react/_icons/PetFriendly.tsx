import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PetFriendly: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1={14.706}
                y1={8.353}
                x2={19.556}
                y2={10.778}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                data-color="color-2"
                strokeLinecap="round"
            />
            <path
                d="M19,5,17,3,14.26,9.394a1,1,0,0,1-.919.606H6a2,2,0,0,0-2,2V22H7V19.236a.993.993,0,0,1,.106-.447L9,15l5.316,1.772a1,1,0,0,1,.684.949V22h3V17l2-8h1a2,2,0,0,0,2-2V5Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M12,7A6,6,0,0,1,6,1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <path
                d="M1,7a3,3,0,0,0,3,3H5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
        </g>
    </Icon>
);

export default PetFriendly;
