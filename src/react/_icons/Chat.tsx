import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Chat: IconComponent = (props: any) => (
    <Icon fill="none" viewBox="0 0 40 40" {...props}>
      <g stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
        <path
          fill="#fff"
          d="M25.5 1C32.956 1 39 6.149 39 12.5c0 3.367-1.7 6.397-4.407 8.5-.198 1.167 0 2.258 2.907 4-1.75 1.258-4.5 1-6.636-1.944-.907.335-1.866.588-2.864.747L12 12.5C12 6.149 18.044 1 25.5 1z"
        ></path>
        <path strokeLinecap="round" d="M34 15H24"></path>
        <path strokeLinecap="round" d="M30 11H19"></path>
        <path
          fill="#fff"
          d="M14.5 36C21.956 36 28 30.851 28 24.5S21.956 13 14.5 13 1 18.149 1 24.5c0 3.367 1.7 6.397 4.407 8.5.198 1.167 0 2.758-2.157 4.258 2 1 3.75.742 5.886-2.202 1.644.608 3.458.944 5.364.944z"
        ></path>
        <path strokeLinecap="round" d="M6.5 26.5H21"></path>
        <path strokeLinecap="round" d="M10 23h11"></path>
      </g>
    </Icon>
);

export default Chat;
