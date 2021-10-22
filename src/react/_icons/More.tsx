import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const More: IconComponent = (props) => (
    <Icon viewBox="0 0 42 42" {...props}>
      <path d="M15 21.2227H27" stroke="currentColor" strokeWidth="2" />
      <path d="M21 15.2227V27.2227" stroke="currentColor" strokeWidth="2" />
      <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41 21.2227C41 32.2687 32.046 41.2227 21 41.2227C9.954 41.2227 1 32.2687 1 21.2227C1 10.1767 9.954 1.22266 21 1.22266C32.046 1.22266 41 10.1767 41 21.2227Z"
          strokeWidth="1.4"
          stroke="currentColor"
          fill="none"
      />
    </Icon>
);

export default More;