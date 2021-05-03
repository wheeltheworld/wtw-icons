import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Instructor: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g transform="translate(0.5, 0.5)" fill="currentColor"><line x1={7} y1={23} x2={7} y2={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><circle cx={4} cy={3} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><path d="M1,23V10A2,2,0,0,1,3,8H15" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><polyline points="10 3 23 3 23 16 11 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} data-color="color-2" strokeLinejoin="round" /><line x1={17} y1={16} x2={20} y2={23} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5} data-cap="butt" data-color="color-2" strokeLinecap="round" /></g>
        </Icon>
    );
    
    export default Instructor;
    