import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Money: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} transform="translate(0.5 0.5)" fill="currentColor" stroke="currentColor"><circle fill="none" stroke="currentColor" strokeMiterlimit={10} cx={12} cy={12} r={11} /><line data-color="color-2" fill="none" strokeMiterlimit={10} x1={12} y1={5} x2={12} y2={19} /><path data-color="color-2" fill="none" strokeMiterlimit={10} d=" M15.375,7.219c-1.621-0.891-6.727-1.556-6.727,1.513c0,3.674,6.484,2.377,6.484,5.619S10.918,17.349,8,16.296" /></g>
        </Icon>
    );
    
    export default Money;
    