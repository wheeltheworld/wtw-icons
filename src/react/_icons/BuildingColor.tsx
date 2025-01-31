import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const BuildingColor: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props} color={props.color || 'white'}>
        <path
            d="M4.74506 23.8999H0.599609V14.5726H4.74506"
            fill="currentColor"
            stroke="#232323"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19.2539 23.8999H23.3994V14.5726H19.2539"
            fill="currentColor"
            stroke="#232323"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19.2542 1.09998H4.74512V23.9H19.2542V1.09998Z"
            fill="#FFFFFF"
            stroke="#232323"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M8.89062 5.24548H9.92699" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0723 5.24548H15.1086" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.89062 9.39087H9.92699" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0723 9.39087H15.1086" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.89062 13.5364H9.92699" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0723 13.5364H15.1086" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.89062 17.6819H9.92699" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0723 17.6819H15.1086" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 23.9V21.8273" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />
    </Icon>
);

export default BuildingColor;
