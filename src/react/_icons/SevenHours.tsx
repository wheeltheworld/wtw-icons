import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SevenHours: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <g>
        <path
        fill="currentColor"
        d="M7.4 20.6c1.4.7 2.9 1.1 4.6 1.1 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2v8.6s0 1.5-.5 2.1l-4.1 7.7z"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 23.2c-1.6 0-3.2-.4-4.7-1.1C5 21.1 3.1 19.2 2 17 .9 14.7.6 12.1 1.1 9.6 1.6 7.1 3 4.9 5 3.3 7 1.7 9.5.8 12 .8c2.3 0 4.5.7 6.4 2 1.9 1.3 3.3 3.2 4.1 5.3.5 1.4.7 2.8.7 4.3s-.4 2.9-1 4.2c-.9 1.9-2.3 3.6-4.1 4.7-1.9 1.3-4 1.9-6.1 1.9z"
      ></path>
        </g>
    </Icon>
);

export default SevenHours;
