import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const BedroomInterior: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <style>
            {
                '.prefix__st0{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
            }
        </style>
        <path
            className="prefix__st0"
            d="M6.14 18.05H3.85V3.44h16.28v14.61h-2.3M1 2.28l2.85 1.16M23 2.28l-2.85 1.16M1 19.88l2.85-1.83M22.98 19.88l-2.85-1.83"
        />
        <g>
            <path
                className="prefix__st0"
                d="M5.66 19.25v2.13M17.34 19.25v2.13M5.66 16.06h11.69v3.19H5.66zM6.72 16.06v-3.72M16.28 16.06v-3.72M6.72 13.41h9.56M11.5 16.06v-2.65"
                transform="translate(.5 .5)"
            />
        </g>
    </Icon>
);

export default BedroomInterior;
