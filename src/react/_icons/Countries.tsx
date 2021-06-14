import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Countries: IconComponent = (props) => (
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
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M12,23c-1.958-1.583-2.083-6.792,1-8 c1.636-0.641,2.166,2.937,5.375,2.042c0.621-0.173,2.083,0.708,1.551,2.052"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M6.294,4.787 c0.631,0.466,1.124,1.071,1.589,1.849c0.405,0.679,1.306,2.57,0.481,3.638C7.43,11.48,4.727,11.887,4.727,13 c0,0.837,1.185,1.793,1.818,2.727c0.952,1.405,0.519,2.767,0,3.636c-0.269,0.451-0.727,0.811-1.203,1.097"
            />
            <path
                data-cap="butt"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M21.8,11c0.131,0.646,0.2,1.315,0.2,2 c0,5.523-4.477,10-10,10S2,18.523,2,13S6.477,3,12,3c0.494,0,0.98,0.036,1.455,0.105"
            />
            <path
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                d="M21,5 c0,2.469-4,6-4,6s-4-3.531-4-6c0-2.531,2.067-4,4-4S21,2.469,21,5z"
            />
        </g>
    </Icon>
);

export default Countries;
