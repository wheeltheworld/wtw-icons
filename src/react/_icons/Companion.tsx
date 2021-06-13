import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Companion: IconComponent = (props) => (
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
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M16.667,15H23v-3.94 c0-0.685-0.359-1.32-0.947-1.672l-2.825-1.695"
            />
            <path
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M13.248,3.199 C13.764,1.908,15.025,1,16.5,1h0C18.433,1,20,2.567,20,4.5v1C20,7.433,18.433,9,16.5,9h0c-0.547,0-1.039-0.12-1.5-0.344"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M6.858,12.89l-4.547,2.724 C1.498,16.101,1,16.98,1,17.929V22h18v-4.071c0-0.948-0.498-1.827-1.311-2.315l-4.547-2.724"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M10,14L10,14 c-2.761,0-5-2.239-5-5V7c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v2C15,11.761,12.761,14,10,14z"
            />
        </g>
    </Icon>
);

export default Companion;
