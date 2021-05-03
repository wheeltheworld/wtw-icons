import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Key: IconComponent = (props) => (
    <Icon viewBox="0 0 40 40" {...props}>
        <path
            fill="currentColor"
            d="M27.59 1.76a11.33 11.33 0 00-10.4 15.84L1.34 33.45a.84.84 0 00-.25.6v4.71a.87.87 0 00.25.58.92.92 0 00.59.25H11a.85.85 0 00.86-.86v-3.55l2.89-1.08a1.2 1.2 0 00.85-.85l.69-2.49h3.56a.85.85 0 00.86-.86v-4.07l2.34-2.34a11.12 11.12 0 004.51.94 11.34 11.34 0 000-22.67zm0 1.71a9.62 9.62 0 11-4.31 18.23.85.85 0 00-1 .16l-3 3a.86.86 0 00-.25.61v3.57h-3.57a.86.86 0 00-.86.85l-.68 2.49L11 33.47c-.44.17-.85.39-.85.86v3.57H4l4.09-4.1a1.09 1.09 0 00.13-.17l12.56-12.52a.85.85 0 000-1.21.82.82 0 00-.6-.25.85.85 0 00-.61.25L6.69 32.74a1.09 1.09 0 00-.13.17L2.8 36.67v-2.26l16-16a.85.85 0 00.16-1 9.62 9.62 0 018.63-13.94zm2.31 3.29a4 4 0 102.85 1.17 4 4 0 00-2.85-1.17zm0 1.71a2.31 2.31 0 11-1.63.67 2.32 2.32 0 011.63-.67z"
        />
    </Icon>
);

export default Key;
