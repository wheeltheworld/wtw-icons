import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const HelpFilled: IconComponent = (props) => (
    <Icon fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill="#8B8B8B"
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            ></path>
            <path fill="#fff" d="M12 19a1 1 0 100-2 1 1 0 000 2z"></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M10 7.527c1.7-.824 3.9-.726 4.652.607.752 1.333.233 2.883-1.055 4.08-1.288 1.195-1.753 1.845-1.753 2.786"
            ></path>
    </Icon>
);

export default HelpFilled;
