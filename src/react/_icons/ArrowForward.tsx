import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ArrowForward: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.90901 16.7803C9.61612 16.4874 9.61612 16.0126 9.90901 15.7197L13.3787 12.25L9.90901 8.78033C9.61612 8.48744 9.61612 8.01256 9.90901 7.71967C10.2019 7.42678 10.6768 7.42678 10.9697 7.71967L15.5 12.25L10.9697 16.7803C10.6768 17.0732 10.2019 17.0732 9.90901 16.7803Z"
            fill="currentColor"
        />
    </Icon>
);

export default ArrowForward;
