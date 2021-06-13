import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const WaterBottle: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <path
                d="M18.074,23H11.926a1,1,0,0,1-1-.923L10,10H20l-.929,12.077A1,1,0,0,1,18.074,23Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <path
                d="M10.859,7A13.261,13.261,0,0,1,10,4V1H6V4c0,1.329-1.843,4.53-1.843,7.926s.469,4.577.469,6.2S4,20.6,4,21.523A1.419,1.419,0,0,0,5.33,23H8"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
        </g>
    </Icon>
);

export default WaterBottle;
