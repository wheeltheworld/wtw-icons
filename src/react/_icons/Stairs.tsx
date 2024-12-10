import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Stairs: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9932 7.31885H19.6716V5.81885H16.7432C16.0529 5.81885 15.4932 6.37849 15.4932 7.06885V8.97126H12.9218C12.2315 8.97126 11.6718 9.5309 11.6718 10.2213V12.4107H9.19595C8.50559 12.4107 7.94595 12.9703 7.94595 13.6607V15.5634H5.66113C4.97078 15.5634 4.41113 16.123 4.41113 16.8134V19.5616H5.91113V17.0634H8.19595C8.88631 17.0634 9.44595 16.5037 9.44595 15.8134V13.9107H11.9218C12.6122 13.9107 13.1718 13.351 13.1718 12.6607V10.4713H15.7432C16.4336 10.4713 16.9932 9.91162 16.9932 9.22126V7.31885Z"
            fill="currentColor"
        />
    </Icon>
);

export default Stairs;
