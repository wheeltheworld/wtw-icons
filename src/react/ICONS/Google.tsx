import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Google: IconComponent = (props) => (
  <Icon viewBox="0 0 48 48" {...props}>
    <g className="nc-icon-wrapper">
      <path
        fill="#d94f3d"
        d="M24 11a12.932 12.932 0 018.346 3.047l6.54-6.228a21.973 21.973 0 00-34.593 6.417l7.373 5.683A13.016 13.016 0 0124 11z"
      ></path>
      <path
        fill="#f2c042"
        d="M11 24a12.942 12.942 0 01.666-4.081l-7.373-5.683a21.935 21.935 0 000 19.528l7.373-5.683A12.942 12.942 0 0111 24z"
      ></path>
      <path
        fill="#5085ed"
        d="M45.1 20h-21v9H36a10.727 10.727 0 01-4.555 6.162l7.316 5.64C43.436 36.606 46.183 29.783 45.1 20z"
      ></path>
      <path
        fill="#57a75c"
        d="M31.442 35.162A13.98 13.98 0 0124 37a13.016 13.016 0 01-12.334-8.919l-7.373 5.683A22.023 22.023 0 0024 46a21.865 21.865 0 0014.758-5.2z"
      ></path>
    </g>
  </Icon>
);
  
export default Google;