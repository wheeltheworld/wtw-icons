import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const closedCaptions: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 31 30"
    >
        <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M29.25 6.25H1.75v17.5h27.5V6.25z"
      ></path>
      <path
         stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.525 18.425a5.469 5.469 0 01-1.946.324 3.114 3.114 0 01-2.454-.97A4.066 4.066 0 018.261 15a4.491 4.491 0 01.417-1.991 2.968 2.968 0 011.205-1.307 3.647 3.647 0 011.85-.452 4.6 4.6 0 012.067.469M22.465 18.425a5.478 5.478 0 01-1.946.324 3.112 3.112 0 01-2.46-.97A4.06 4.06 0 0117.2 15a4.49 4.49 0 01.416-1.991c.26-.549.68-1.005 1.207-1.307a3.645 3.645 0 011.85-.452 4.591 4.591 0 012.066.469"
      ></path>
    </Icon>
);

export default closedCaptions;
