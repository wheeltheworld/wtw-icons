import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const RollInShower: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <line
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1={1.8}
            y1={4.5}
            x2={9}
            y2={4.5}
        />
    </Icon>
);

export default RollInShower;
