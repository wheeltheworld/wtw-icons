import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const StarFull: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9248 3.69051C11.3832 2.76136 12.7082 2.76137 13.1667 3.69051L15.4307 8.27877L20.4939 9.01443C21.5192 9.1634 21.9286 10.4234 21.1867 11.1465L17.523 14.7179L18.3876 19.7605C18.5627 20.7817 17.4908 21.5603 16.5738 21.0781L12.0457 18.6968L7.51763 21.0781C6.60062 21.5603 5.5287 20.7817 5.70379 19.7605L6.5684 14.7179L2.90471 11.1465C2.16283 10.4233 2.57224 9.1634 3.59751 9.01443L8.66067 8.27877L10.9248 3.69051Z"
            fill="currentColor"
        />
    </Icon>
);

export default StarFull;
