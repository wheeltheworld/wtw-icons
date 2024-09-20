import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Project: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 700 512">
        <path d="M384 320H256c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32zM192 32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v128c0 17.7 14.3 32 32 32h95.7l73.2 128C212 301 232.4 288 256 288h.3L192 175.5V128h224V64H192V32zM608 0H480c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32z"/>
        </svg>
    </Icon>
);

export default Project;
