import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const VerySlope: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.69589 4.86071C8.76118 4.48294 9.12036 4.22963 9.49813 4.29492L13.8423 5.0458C14.2201 5.11109 14.4734 5.47027 14.4081 5.84804L13.6572 10.1922C13.5919 10.57 13.2328 10.8233 12.855 10.758C12.4772 10.6927 12.2239 10.3335 12.2892 9.95578L12.7547 7.26293L6.48156 11.6871C6.16827 11.908 5.73518 11.8332 5.51422 11.5199C5.29327 11.2066 5.36813 10.7735 5.68142 10.5525L11.9545 6.12839L9.26167 5.66295C8.8839 5.59765 8.63059 5.23848 8.69589 4.86071Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9881 9.8458L5.65887 18.1222H17.9881V9.8458ZM17.4972 8.60962C18.2611 8.09678 19.2881 8.64428 19.2881 9.56444V18.2722C19.2881 18.9073 18.7732 19.4222 18.1381 19.4222H5.16629C4.03036 19.4222 3.5822 17.9505 4.52533 17.3174L17.4972 8.60962Z"
            fill="currentColor"
        />
    </Icon>
);

export default VerySlope;
