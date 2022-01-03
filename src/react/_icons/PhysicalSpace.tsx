import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PhysicalSpace: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
       <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.784 5.942a2.092 2.092 0 01-2.06-2.504 2.096 2.096 0 012.858-1.527 2.094 2.094 0 011.29 1.94 2.097 2.097 0 01-2.088 2.09zM12.56 20.905h-1.563a1.414 1.414 0 01-1.414-1.275l-.563-4.409h-.78a.695.695 0 01-.532-.242.72.72 0 01-.172-.555l.648-5.05a1.408 1.408 0 011.407-1.26h4.398a1.413 1.413 0 011.414 1.275l.64 5.035a.658.658 0 01-.171.555.697.697 0 01-.532.242h-.781l-.562 4.425a1.408 1.408 0 01-1.414 1.259h-.024z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M16.801 17.895s2.797.742 2.766 2.173C19.512 23 11.84 23 11.84 23s-8.07-.14-7.836-2.916c.14-1.72 2.664-2.134 2.664-2.134"
      ></path>
    </Icon>
);

export default PhysicalSpace;
