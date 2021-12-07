import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Sun: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g fill="currentColor">
            <path d="M30.0916 9.87181L33.4923 6.39709" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M34.4907 19.9633L39.0005 20.0002" stroke="currentColor"  strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M33.4923 33.5663L30.0916 30.0916" stroke="currentColor"  strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M9.87212 9.87181L6.5083 6.39709" stroke="currentColor"  strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M5.47278 19.9633L1 20.0002" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M6.5083 33.5663L9.87212 30.0916" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M19.9634 5.47278L20.0003 1" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <path d="M19.9634 34.4901L20.0003 38.9999" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round"/>
            <circle cx="20.0002" cy="19.9999" r="9.66934" stroke="currentColor" strokeWidth={1.5}/>
        </g>
    </Icon>
);

export default Sun;
