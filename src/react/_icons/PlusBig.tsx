import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PlusBig: IconComponent = (props: any) => (
    <Icon viewBox="0 0 20 24" {...props}>
        <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5552_46684)">
            <path d="M12 7V17" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 12H6.99997" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#232323" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_5552_46684">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    </Icon>
);

export default PlusBig;
