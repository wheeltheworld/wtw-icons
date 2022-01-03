import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const SmallSpaces: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
       <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22.027 1H1.973A.973.973 0 001 1.973v20.054c0 .538.435.973.973.973h20.054a.973.973 0 00.973-.973V1.973A.973.973 0 0022.027 1z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M3.834 12.394h6.405M8.286 10.214l2.146 2.146M10.382 12.42l-2.096 2.104M20.108 12.394h-6.406M15.656 10.214l-2.147 2.146M13.551 12.42l2.105 2.104"
      ></path>
    </Icon>
);

export default SmallSpaces;
