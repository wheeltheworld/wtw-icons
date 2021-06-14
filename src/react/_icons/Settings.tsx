import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Settings: IconComponent = (props) => (
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
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                d="M23,12c0-1.105-0.895-2-2-2 h-1.262c-0.189-0.732-0.477-1.422-0.852-2.058l0.892-0.892c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0 l-0.892,0.892C15.422,4.739,14.732,4.451,14,4.262V3c0-1.104-0.895-2-2-2c-1.105,0-2,0.895-2,2v1.262 C9.268,4.451,8.578,4.739,7.942,5.114L7.05,4.222c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l0.892,0.892 C4.739,8.578,4.451,9.268,4.262,10H3c-1.104,0-2,0.895-2,2c0,1.105,0.895,2,2,2h1.262c0.189,0.732,0.477,1.422,0.852,2.058 L4.222,16.95c-0.781,0.781-0.781,2.047,0,2.828c0.781,0.781,2.047,0.781,2.828,0l0.892-0.892c0.635,0.375,1.326,0.663,2.058,0.852 V21c0,1.104,0.895,2,2,2c1.105,0,2-0.895,2-2v-1.262c0.732-0.189,1.422-0.477,2.058-0.852l0.892,0.892 c0.781,0.781,2.047,0.781,2.828,0c0.781-0.781,0.781-2.047,0-2.828l-0.892-0.892c0.375-0.635,0.663-1.326,0.852-2.058H21 C22.104,14,23,13.105,23,12z"
            />
            <circle data-color="color-2" fill="none" strokeMiterlimit={10} cx={12} cy={12} r={3} />
        </g>
    </Icon>
);

export default Settings;
