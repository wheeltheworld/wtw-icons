import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowNarrowRight: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.005 10.6514C22.6724 9.98403 23.7544 9.98403 24.4218 10.6514L32.5619 18.7916C33.2293 19.459 33.2293 20.541 32.5619 21.2084L24.4218 29.3485C23.7544 30.0159 22.6724 30.0159 22.005 29.3485C21.3376 28.6812 21.3376 27.5991 22.005 26.9317L27.2278 21.7089H9.64644C8.70262 21.7089 7.9375 20.9438 7.9375 20C7.9375 19.0562 8.70262 18.291 9.64644 18.291H27.2278L22.005 13.0682C21.3376 12.4008 21.3376 11.3188 22.005 10.6514Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowNarrowRight;
