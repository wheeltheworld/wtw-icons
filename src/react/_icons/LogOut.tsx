import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const LogOut: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g transform="translate(0.5 0.5)"><line fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1={7} y1={12} x2={22} y2={12} /><polyline fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="17,7 22,12 17,17  " /><polyline fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="14,23 2,23 2,1 14,1  " /></g>
        </Icon>
    );
    
    export default LogOut;
    