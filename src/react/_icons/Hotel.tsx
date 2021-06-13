import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Hotel: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            transform="translate(0.5 0.5)"
            fill="currentColor"
            stroke="currentColor"
        >
            <polyline data-color="color-2" fill="none" strokeMiterlimit={10} points=" 5,23 1,23 1,14 5,14 " />
            <polyline data-color="color-2" fill="none" strokeMiterlimit={10} points=" 19,23 23,23 23,14 19,14 " />
            <rect x={5} y={1} fill="none" stroke="currentColor" strokeMiterlimit={10} width={14} height={22} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={9} y1={5} x2={10} y2={5} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={5} x2={15} y2={5} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={9} y1={9} x2={10} y2={9} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={9} x2={15} y2={9} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={9} y1={13} x2={10} y2={13} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={13} x2={15} y2={13} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={9} y1={17} x2={10} y2={17} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={14} y1={17} x2={15} y2={17} />
            <line fill="none" stroke="currentColor" strokeMiterlimit={10} x1={12} y1={23} x2={12} y2={21} />
        </g>
    </Icon>
);

export default Hotel;
