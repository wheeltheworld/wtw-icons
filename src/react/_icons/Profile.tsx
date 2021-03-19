import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Profile: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <g>
            <circle cx="20" cy="21.18" r="18.44" fill="#f0f0f1" />
        </g>
        <g>
            <path
                fill="currentColor"
                d="M20,12.67a4.12,4.12,0,1,0,4.12,4.12A4.11,4.11,0,0,0,20,12.67Zm0,6.57a2.45,2.45,0,1,1,2.45-2.45A2.45,2.45,0,0,1,20,19.24Z"
            />
            <path
                fill="currentColor"
                d="M23.36,22.57H16.64a4.08,4.08,0,0,0-4.08,4.08v1.58a.84.84,0,0,0,.84.83h0a.84.84,0,0,0,.84-.83V26.65a2.4,2.4,0,0,1,2.4-2.41h6.72a2.4,2.4,0,0,1,2.4,2.41v1.58a.84.84,0,0,0,.84.83h0a.84.84,0,0,0,.84-.83V26.65A4.08,4.08,0,0,0,23.36,22.57Z"
            />
        </g>
    </Icon>
);

export default Profile;
