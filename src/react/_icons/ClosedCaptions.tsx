import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const closedCaptions: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
     <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
      >
        <path d="M1 5H23V19H1z"></path>
        <path d="M10.42 14.741A4.375 4.375 0 018.863 15a2.491 2.491 0 01-1.963-.776A3.253 3.253 0 016.209 12a3.593 3.593 0 01.333-1.593 2.375 2.375 0 01.964-1.046A2.918 2.918 0 018.987 9a3.68 3.68 0 011.653.375M17.572 14.741a4.383 4.383 0 01-1.557.259 2.489 2.489 0 01-1.968-.776A3.248 3.248 0 0113.36 12a3.593 3.593 0 01.333-1.593 2.382 2.382 0 01.965-1.046A2.916 2.916 0 0116.139 9a3.673 3.673 0 011.652.375"></path>
      </g>
    </Icon>
);

export default closedCaptions;
