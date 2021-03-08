import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SedanCar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="15.051"
                y1="16"
                x2="7.949"
                y2="16"
            />
            <polyline
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                points="3.051,16 1,16 1,10 5,5 15,5 18,10 23,10 23,16 19.949,16"
            />
            <circle fill="none" strokeMiterlimit="10" cx="5.5" cy="16.5" r="2.5" />
            <circle fill="none" strokeMiterlimit="10" cx="17.5" cy="16.5" r="2.5" />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="18"
                y1="10"
                x2="1"
                y2="10"
            />
            <line
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                x1="10"
                y1="5"
                x2="10"
                y2="10"
            />
        </g>
    </Icon>
);

export default SedanCar;
