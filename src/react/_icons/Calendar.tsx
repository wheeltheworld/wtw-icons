import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Calendar: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g transform="translate(0.5, 0.5)" fill="currentColor"><line data-color="color-2" x1={17} y1={4} x2={17} y2={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><line data-color="color-2" x1={7} y1={4} x2={7} y2={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /><line data-cap="butt" data-color="color-2" x1={1} y1={8} x2={23} y2={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5} strokeLinecap="round" /><rect x={1} y={4} width={22} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} strokeLinejoin="round" /></g>
        </Icon>
    );
    
    export default Calendar;
    