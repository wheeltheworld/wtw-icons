import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const View: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className="nc-icon-wrapper"
        transform="translate(0.5 0.5)"
      >
        <path d="M1.373 13.183a2.064 2.064 0 010-2.366C2.946 8.59 6.819 4 12 4s9.054 4.59 10.627 6.817a2.064 2.064 0 010 2.366C21.054 15.41 17.181 20 12 20s-9.054-4.59-10.627-6.817z" />
        <circle cx="12" cy="12" r="4" data-color="color-2" />
      </g>
    </Icon>
);

export default View;
