import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Bathroom: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            d="M7.83 15.15a2.9 2.9 0 112.9-2.9 2.89 2.89 0 01-2.9 2.9zM10.73 38.85h-5.8v-7.42H1.86v-8.86a2.89 2.89 0 012.9-2.91h6a2.89 2.89 0 012.9 2.91v8.86h-2.9zM24.11 29.82a5.09 5.09 0 00-.64 7.1 5.27 5.27 0 007.09.8l.16-.16M38.14 37.72l-1-4a1.23 1.23 0 00-1.29-1H30.4a1.36 1.36 0 01-1.29-1.12L28 25.15h7.58M28.14 21.92a2.89 2.89 0 01-2.9-2.9 2.84 2.84 0 012.9-3.02 2.89 2.89 0 012.9 2.9 2.93 2.93 0 01-2.9 3.02zM18.31 9.19v29.66"
        />
    </Icon>
);

export default Bathroom;
