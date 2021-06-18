import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MessengerNeutral: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="currentColor">
            <path
                fill="currentColor"
                d="M24,0C10.879,0,0.242,9.947,0.242,22.216c0,6.98,3.443,13.208,8.826,17.281V48l8.108-4.497 c2.161,0.605,4.452,0.93,6.824,0.93c13.121,0,23.758-9.947,23.758-22.217S37.121,0,24,0z M26.502,29.792l-6.145-6.384L8.524,29.953 l12.974-13.768l6.145,6.384l11.834-6.544L26.502,29.792z"
            ></path>
        </g>
    </Icon>
);

export default MessengerNeutral;
