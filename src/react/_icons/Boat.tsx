import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Boat: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g transform="translate(0.5, 0.5)" fill="currentColor"><polyline fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeMiterlimit={10} points="6,7 6,2 10,2 10,7 " strokeLinejoin="round" /><polyline data-cap="butt" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} points="4,11 4,7 16,7 18,11 " strokeLinejoin="round" strokeLinecap="round" /><polyline fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeMiterlimit={10} points="4,17 2,11 22,11 19,17 " strokeLinejoin="round" /><path data-color="color-2" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeMiterlimit={10} d="M1,18 c0,2.2,1.8,4,4,4c1.5,0,2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1s2.8-0.9,3.5-2.1c0.7,1.2,2,2.1,3.5,2.1c2.2,0,4-1.8,4-4" strokeLinejoin="round" /></g>
        </Icon>
    );
    
    export default Boat;
    