import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const OnSale: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g stroke="#2353AB" stroke-width=".75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
            <path d="m11.276 5.382-2.958 5.124M11.976 6.87c-.373-.65-2.001-1.915-2.65-.792-.776 1.345 1.744 2.167 1.059 3.353-.685 1.187-2.093.255-2.882-.714" />
        </g>
        <path
            d="M8.68 2.168a1 1 0 0 0-.782-.094l.14.48-.14-.48-4.643 1.36a1 1 0 0 0-.69 1.196l1.143 4.702a1 1 0 0 0 .471.63l8.2 4.734a1 1 0 0 0 1.366-.366l3.5-6.063a1 1 0 0 0-.366-1.366l-8.2-4.733z"
            stroke="#2353AB"
        />
        <ellipse cx="4.986" cy="5.167" rx=".467" ry=".493" transform="rotate(30 4.986 5.167)" fill="#2353AB" />
    </Icon>
);

export default OnSale;
