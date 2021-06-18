import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const StairHandrails: IconComponent = (props) => (
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
                    points="21.5,22.5 21.5,18.5 14.5,18.5 14.5,14.5 7.5,14.5 7.5,10.5 0.5,10.5"
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1="1"
                y1="23"
                x2="23"
                y2="23"
            />
        </g>
        <g>
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                points="2,11 2,5.4 20.9,12.3 20.9,19"
            />
        </g>
    </Icon>
);

export default StairHandrails;
