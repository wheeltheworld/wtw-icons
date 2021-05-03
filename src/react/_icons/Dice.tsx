import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Dice: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} transform="translate(0.5 0.5)" fill="currentColor" stroke="currentColor"><polyline data-cap="butt" points="2.999 6 11.999 10 20.999 6" fill="none" stroke="currentColor" strokeMiterlimit={10} /><line data-cap="butt" x1={11.999} y1={10} x2={11.999} y2={22} fill="none" stroke="currentColor" strokeMiterlimit={10} /><polygon points="20.999 18 11.999 22 2.999 18 2.999 6 11.999 2 20.999 6 20.999 18" fill="none" stroke="currentColor" strokeMiterlimit={10} /><ellipse data-color="color-2" data-stroke="none" cx={16.5} cy={14} rx={1} ry={1.25} stroke="none" /><ellipse data-color="color-2" data-stroke="none" cx={6} cy={11.5} rx={1} ry={1.25} stroke="none" /><ellipse data-color="color-2" data-stroke="none" cx={9} cy={16.5} rx={1} ry={1.25} stroke="none" /></g>
        </Icon>
    );
    
    export default Dice;
    