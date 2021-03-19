import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Weather: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinejoin="round"
            strokeLinecap="round"
        >
            <path
                data-cap="butt"
                data-color="color-2"
                d="M7.2 15.3c-.4-.8-.7-1.8-.7-2.8 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.4-.5 2.7-1.3 3.7"
            />
            <path data-color="color-2" d="M1.5 12.5h1M4.7 4.7l.7.7M12.5 1.5v1M20.3 4.7l-.7.7M23.5 12.5h-1" />
            <path d="M5.5 23.5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.5 0 1 .1 1.5.3.9-1.9 2.8-3.3 5-3.3 2.4 0 4.5 1.6 5.2 3.7.7-.5 1.4-.7 2.3-.7 2.2 0 4 1.8 4 4s-1.8 4-4 4h-14z" />
        </g>
    </Icon>
);

export default Weather;
