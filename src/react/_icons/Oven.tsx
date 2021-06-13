import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Oven: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <rect data-color="color-2" x={5} y={9} width={14} height={10} fill="none" strokeMiterlimit={10} />
            <line data-color="color-2" x1={5} y1={5} x2={7} y2={5} fill="none" strokeMiterlimit={10} />
            <line data-color="color-2" x1={11} y1={5} x2={13} y2={5} fill="none" strokeMiterlimit={10} />
            <line data-color="color-2" x1={17} y1={5} x2={19} y2={5} fill="none" strokeMiterlimit={10} />
            <rect x={1} y={1} width={22} height={22} fill="none" stroke="currentColor" strokeMiterlimit={10} />
            <line x1={9} y1={13} x2={15} y2={13} fill="none" stroke="currentColor" strokeMiterlimit={10} />
        </g>
    </Icon>
);

export default Oven;
