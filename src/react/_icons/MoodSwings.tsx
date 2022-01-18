import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MoodSwings: IconComponent = (props) => (
    <Icon {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
     <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M5.274 9.216a1.75 1.75 0 001.883 1.278 1.896 1.896 0 001.961-1.307M18.57 19.526a1.92 1.92 0 00-1.982-1.257 1.726 1.726 0 00-1.869 1.278"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M4.174 3.319a5.593 5.593 0 017.068.697 5.61 5.61 0 01-1.816 9.143 5.591 5.591 0 01-6.1-1.215 5.608 5.608 0 01.848-8.625zM13.652 13.8a7.14 7.14 0 001.573-2.533c.458-.122.93-.185 1.406-.186 1.127 0 2.226.297 3.13.902a5.605 5.605 0 012.381 5.755 5.608 5.608 0 01-4.398 4.404 5.591 5.591 0 01-5.747-2.383 5.612 5.612 0 01-.944-3.114c.001-.396.045-.791.132-1.178a7.13 7.13 0 002.467-1.668z"
      ></path>
      <path
        fill="currentColor"
        d="M10.007 6.207a.61.61 0 01-.62.593.6.6 0 11.62-.593zM5.761 6.207a.629.629 0 11-.628-.6.613.613 0 01.628.6zM19.339 15.748a.618.618 0 01-.392.559.613.613 0 01-.236.04.6.6 0 11.628-.6zM15.085 15.748a.607.607 0 01-.62.6.598.598 0 01-.613-.841.6.6 0 01.613-.353.606.606 0 01.62.594"
      ></path>
    </Icon>
);

export default MoodSwings;
