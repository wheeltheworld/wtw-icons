import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const BuildingColor: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props} fill="none">
        <path fill="currentColor" d="M0 14H4V23H0z"></path>
        <path fill={props.fill} d="M19 14H23V23H19z"></path>
        <g
        stroke="#232323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        clipPath="url(#clip0_856_21772)"
        >
            <path d="M4.745 23.4H.6v-9.327h4.145M19.255 23.4H23.4v-9.327h-4.145M19.255.6H4.745v22.8h14.51V.6zM8.89 4.745h1.037M14.073 4.745h1.036M8.89 8.89h1.037M14.073 8.89h1.036M8.89 13.036h1.037M14.073 13.036h1.036M8.89 17.182h1.037M14.073 17.182h1.036M12 23.4v-2.073"></path>
        </g>
        <defs>
            <clipPath id="clip0_856_21772">
                <path fill="#fff" d="M0 0H24V24H0z"></path>
            </clipPath>
        </defs>
    </Icon>
);

export default BuildingColor;
