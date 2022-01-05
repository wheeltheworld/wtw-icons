import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TwoHours: IconComponent = (props) => (
    <Icon fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 23.2c-2.3 0-4.5-.7-6.4-2-1.9-1.3-3.3-3.2-4.1-5.3C1 14.4.7 13 .8 11.5c.1-1.5.4-2.9 1-4.2 1-2 2.4-3.6 4.2-4.7C7.8 1.5 9.9.8 12 .8c2.3 0 4.5.7 6.4 2 1.9 1.3 3.3 3.2 4.1 5.3.5 1.4.7 2.8.7 4.3-.1 1.5-.4 2.9-1 4.2-.9 1.9-2.3 3.6-4.1 4.7-1.9 1.3-4 1.9-6.1 1.9z"
      ></path>
      <path
        fill="currentColor"
        d="M12.1 11.8c0 .1 0 .2.1.2h.2l8-4.9c-.1-.2-.3-.5-.5-.7-.8-1.1-1.9-2.1-3.1-2.8-.2-.1-.5-.3-.7-.4-1.3-.6-2.6-.9-4-.9v9.5z"
      ></path>
    </Icon>
);

export default TwoHours;
