import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ElectricDeviceWheelchair: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M17.4,16.2L4.1,2.2H1"
            />
            <g>
                <circle
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    cx={17.4}
                    cy={16.2}
                    r={5.6}
                />
                <circle
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    cx={17.4}
                    cy={16.2}
                    r={2.3}
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={11.7}
                y1={10.2}
                x2={4.2}
                y2={10.2}
            />
            <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                points="7.7,3 10.9,6.4 13.9,9.5 14.2,7.1 13,5.8 9.8,2.5  "
            />
        </g>
    </Icon>
);

export default ElectricDeviceWheelchair;
