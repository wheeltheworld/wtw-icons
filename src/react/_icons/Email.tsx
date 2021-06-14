import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Email: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline data-color="color-2" points="19 7 12 14 5 7" fill="none" strokeMiterlimit={10} />
            <rect
                x={1}
                y={3}
                width={22}
                height={18}
                rx={2}
                ry={2}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
            />
            <line data-color="color-2" x1={7} y1={15} x2={5} y2={17} fill="none" strokeMiterlimit={10} />
            <line data-color="color-2" x1={17} y1={15} x2={19} y2={17} fill="none" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Email;
