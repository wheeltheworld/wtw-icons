import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Security: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g transform="translate(.5 .5)" fill="currentColor">
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-color="color-2"
                strokeLinejoin="round"
                d="M12 19v4"
            />
            <path
                d="M8.8 13.907l-5.825 3.51A2 2 0 002 19.132V23h20v-3.868a2 2 0 00-.971-1.715l-5.829-3.51"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <path
                d="M18 5.544V7c0 5-2.686 8-6 8s-6-3-6-8V5.544"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                data-cap="butt"
                strokeLinecap="round"
            />
            <ellipse
                cx={12}
                cy={4}
                rx={7}
                ry={3}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                strokeLinejoin="round"
            />
            <circle cx={12} cy={4} r={1} data-cap="butt" data-color="color-2" data-stroke="none" />
        </g>
    </Icon>
);

export default Security;
