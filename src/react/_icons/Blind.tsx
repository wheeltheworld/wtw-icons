import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Blind: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g strokeLinecap="round" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round">
            <circle cx="10" cy="3" r="2" data-cap="butt"></circle>
            <line x1="19" y1="16" x2="21" y2="21" stroke="currentColor"></line>
            <path d="M14,22l-.925-4.625a1,1,0,0,0-.381-.6L9.8,14.6A2,2,0,0,1,9,13V8.029"></path>
            <path d="M4,13l.869-2.607a1,1,0,0,1,.5-.578L8.789,8.106A.993.993,0,0,1,9.236,8H11.47a1,1,0,0,1,.828.439l1.7,2.5a.991.991,0,0,0,.28.275L17,13"></path>
            <line x1="8" y1="17" x2="6" y2="21"></line>
        </g>
    </Icon>
);

export default Blind;
