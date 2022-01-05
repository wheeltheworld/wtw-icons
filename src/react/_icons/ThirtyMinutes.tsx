import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ThirtyMinutes: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
     <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 23.2c-2.3 0-4.5-.7-6.4-2-1.9-1.3-3.3-3.2-4.1-5.3C1 14.4.7 13 .8 11.5c.1-1.5.4-2.9 1-4.2 1-2 2.4-3.6 4.2-4.7C7.8 1.5 9.9.8 12 .8c2.3 0 4.5.7 6.4 2 1.9 1.3 3.3 3.2 4.1 5.3.5 1.4.7 2.8.7 4.3-.1 1.5-.4 2.9-1 4.2-.9 1.9-2.3 3.6-4.1 4.7-1.9 1.3-4 1.9-6.1 1.9z"
      ></path>
      <path
        fill="currentColor"
        d="M14.4 2.7c-.8-.2-1.6-.3-2.4-.3V12h.2l2.2-9.3z"
      ></path>
    </Icon>
);

export default ThirtyMinutes;
