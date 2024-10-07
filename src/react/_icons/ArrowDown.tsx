import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowDown: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2803 9.40907C15.9874 9.11618 15.5126 9.11618 15.2197 9.40907L11.75 12.8787L8.28033 9.40907C7.98744 9.11618 7.51256 9.11618 7.21967 9.40907C6.92678 9.70196 6.92678 10.1768 7.21967 10.4697L11.75 15.0001L16.2803 10.4697C16.5732 10.1768 16.5732 9.70196 16.2803 9.40907Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowDown;
