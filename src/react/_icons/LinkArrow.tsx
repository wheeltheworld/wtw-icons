import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const LinkArrow: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0594 8.42749C10.0594 8.01328 10.3952 7.67749 10.8094 7.67749H15.5727C15.9869 7.67749 16.3227 8.01328 16.3227 8.42749V13.1908C16.3227 13.605 15.9869 13.9408 15.5727 13.9408C15.1585 13.9408 14.8227 13.605 14.8227 13.1908V10.2382L8.95806 16.1028C8.66517 16.3956 8.1903 16.3956 7.8974 16.1028C7.60451 15.8099 7.60451 15.335 7.8974 15.0421L13.762 9.17749H10.8094C10.3952 9.17749 10.0594 8.8417 10.0594 8.42749Z"
            fill="currentColor"
        />
    </Icon>
);

export default LinkArrow;
