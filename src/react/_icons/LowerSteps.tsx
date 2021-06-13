import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LowerSteps: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <g transform="translate(0.5 0.5)">
                <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    points="21.5,9.5 16.5,9.5 16.5,12.5 11.5,12.5 11.5,15.52 6.5,15.52 6.5,18.51 1.5,18.51 1.5,21.53  "
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={1}
                y1={22.03}
                x2={23}
                y2={22.03}
            />
        </g>
    </Icon>
);

export default LowerSteps;
