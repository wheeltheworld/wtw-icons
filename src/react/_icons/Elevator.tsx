import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Elevator: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polygon
                points="18 10 24 10 21 6 18 10"
                data-cap="butt"
                data-color="color-2"
                data-stroke="none"
                stroke="none"
            />
            <polygon
                points="18 14 24 14 21 18 18 14"
                data-cap="butt"
                data-color="color-2"
                data-stroke="none"
                stroke="none"
            />
            <rect x={1} y={1} width={7} height={22} fill="none" stroke="currentColor" strokeMiterlimit={10} />
            <rect x={8} y={1} width={7} height={22} fill="none" stroke="currentColor" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Elevator;
