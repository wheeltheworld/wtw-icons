import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const VideoCamera: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <rect x="1" y="7" fill="none" stroke="currentColor" strokeMiterlimit="10" width="15" height="14" />
            <polygon fill="none" stroke="currentColor" strokeMiterlimit="10" points="23,19 16,16 16,12 23,9 " />
            <polyline data-color="color-2" fill="none" strokeMiterlimit="10" points=" 16,4 16,2 8,2 " />
            <circle
                data-stroke="none"
                fill="currentColor"
                cx="5"
                cy="11"
                r="1"
                strokeLinejoin="miter"
                strokeLinecap="square"
                stroke="none"
            />
        </g>
    </Icon>
);

export default VideoCamera;
