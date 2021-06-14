import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Hide: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <path
                d="M1.373,13.183a2.064,2.064,0,0,1,0-2.366C2.946,8.59,6.819,4,12,4s9.054,4.59,10.627,6.817a2.064,2.064,0,0,1,0,2.366C21.054,15.41,17.181,20,12,20S2.946,15.41,1.373,13.183Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
            />
            <circle data-color="color-2" cx={12} cy={12} r={4} fill="none" strokeMiterlimit={10} />
            <line data-color="color-2" x1={2} y1={22} x2={22} y2={2} fill="none" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Hide;
