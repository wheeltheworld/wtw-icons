import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const NarrowShower: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <g>
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M6.3,22.2V2.1h11.3v20.1"
                />
            </g>
            <g>
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.6,9.6h5.7c0-1.6-1.3-2.8-2.8-2.8C9.9,6.7,8.6,8,8.6,9.6z"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5,12.2v-0.7"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.5,13.5v-0.7"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.4,12.1v-0.7"
                        />
                    </g>
                </g>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    x1="11.5"
                    y1="6.8"
                    x2="11.5"
                    y2="4.5"
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                x1="6.5"
                y1="4.5"
                x2="11.5"
                y2="4.5"
            />
        </g>
    </Icon>
);

export default NarrowShower;
