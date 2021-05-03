import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Parking: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g transform="translate(0.5, 0.5)" fill="currentColor"><rect x={1} y={1} width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><line x1={9} y1={7} x2={9} y2={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} data-color="color-2" strokeLinejoin="round" /><path d="M9,13h3a3,3,0,0,0,3-3h0a3,3,0,0,0-3-3H9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5} data-cap="butt" data-color="color-2" strokeLinecap="round" /></g>
        </Icon>
    );
    
    export default Parking;
    