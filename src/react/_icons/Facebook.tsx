import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Facebook: IconComponent = (props) => (
    <Icon viewBox="0 0 48 48" {...props}>
        <g className="nc-icon-wrapper">
            <circle cx={24} cy={24} r={23} fill="#1877f2" />
            <path
                d="M32.953,30.648,33.973,24H27.594V19.686c0-1.819.891-3.592,3.748-3.592h2.9v-5.66a35.306,35.306,0,0,0-5.148-.45c-5.254,0-8.688,3.184-8.688,8.949V24h-5.84v6.648h5.84V46.72a23.206,23.206,0,0,0,7.188,0V30.648Z"
                fill="#ffffff"
            />
        </g>
    </Icon>
);

export default Facebook;
