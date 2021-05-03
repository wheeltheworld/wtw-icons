import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const Person: IconComponent = (props) => (
        <Icon viewBox="0 0 24 24" fill="undefined" {...props}>
            <g><path fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeMiterlimit={10} d="M21.5,23.2v-2.8c0-2.6-2.1-4.7-4.7-4.7H7.2c-2.6,0-4.7,2.1-4.7,4.7v2.8" /><path fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} d="M12,11.4c2.8,0,5.1-2.3,5.1-5.1S14.8,1.2,12,1.2c-2.8,0-5.1,2.3-5.1,5.1S9.2,11.4,12,11.4z" /></g>
        </Icon>
    );
    
    export default Person;
    