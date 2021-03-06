import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Security: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(0.5, 0.5)" fill="currentColor">
            <line
                x1={12}
                y1={19}
                x2={12}
                y2={23}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
            />
            <path
                d="M8.8,13.907l-5.825,3.51A2,2,0,0,0,2,19.132V23H22V19.132a2,2,0,0,0-.971-1.715L15.2,13.907"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M18,5.544V7c0,5-2.686,8-6,8S6,12,6,7V5.544"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <ellipse
                cx={12}
                cy={4}
                rx={7}
                ry={3}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle
                cx={12}
                cy={4}
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

export default Security;
