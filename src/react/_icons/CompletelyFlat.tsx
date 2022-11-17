import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const CompletelyFlat: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 60 60" {...props}>
        <g fill="none" className="nc-icon-wrapper">
            <path fill="none" d="M0 0H60V60H0z"></path>
            <path
                fill="currentColor"
                d="M9.3 30.397c.379.229.821.345 1.324.349l25.298-.045.021 4.552a2.71 2.71 0 001.292 2.372l.053.034c.81.49 1.846.438 2.63-.071l10.89-7.247c.785-.51 1.196-1.394 1.192-2.3a2.887 2.887 0 00-1.181-2.305l-10.964-7.314c-.778-.547-1.785-.551-2.624-.075-.838.476-1.334 1.382-1.31 2.383l.022 4.552-25.354.012C9.165 25.264 7.976 26.508 8 28.04a2.703 2.703 0 001.292 2.372l.007-.015zM56.255 42H3.745C1.677 42 0 43.237 0 44.764v12.472C0 58.763 1.677 60 3.745 60h52.51C58.323 60 60 58.763 60 57.236V44.764C60 43.237 58.323 42 56.255 42z"
            ></path>
        </g>
    </Icon>
);

export default CompletelyFlat;
