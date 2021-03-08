import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const AccessiblePaths: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <style>
            {
                '.prefix__st0{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
            }
        </style>
        <g transform="translate(.5 .5)">
            <circle className="prefix__st0" cx={10.13} cy={2.67} r={2.17} />
            <path
                className="prefix__st0"
                d="M.58 22.5l21.84-.08M6.62 10.95c-2.01 1.31-2.58 3.99-1.27 6s3.99 2.58 6 1.27c.59-.39 1.09-.91 1.43-1.53M17.43 17.57l-.52-3.43c-.08-.56-.58-.96-1.15-.92l-3.49.24c-1.17.08-2.2-.79-2.31-1.95l-.35-3.43 5.41.52"
            />
        </g>
    </Icon>
);

export default AccessiblePaths;
