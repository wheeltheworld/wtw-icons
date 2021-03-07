import Icon from '../components/Icon';
import React from 'react';
import { IconComponent } from '../types';

const Places: IconComponent = (props) => {
    return (
        <Icon viewBox="0 0 40 40" {...props}>
            <g>
                <path
                    fill="currentColor"
                    d="M20,6.39a7.29,7.29,0,1,0,7.29,7.29h0A7.31,7.31,0,0,0,20,6.39Zm0,12.69a5.4,5.4,0,1,1,5.4-5.4h0A5.4,5.4,0,0,1,20,19.08Z"
                />
                <path
                    fill="currentColor"
                    d="M20,0A13.7,13.7,0,0,0,6.32,13.68c0,5.38,3.79,12.57,6.06,16.38a69.8,69.8,0,0,0,4.38,6.55c2.3,3,2.84,3,3.24,3s.94,0,3.24-3a69.8,69.8,0,0,0,4.38-6.55c2.27-3.81,6.06-11,6.06-16.38A13.7,13.7,0,0,0,20,0Zm0,37.54c-2.35-2.2-11.8-16-11.8-23.86a11.8,11.8,0,0,1,23.6,0C31.8,21.58,22.35,35.34,20,37.54Z"
                />
            </g>
        </Icon>
    );
};

export default Places;
