import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ShowerGrabBar: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <g>
            <g>
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.3,6.1l6,0c0-1.7-1.3-3-3-3C6.7,3.1,5.3,4.4,5.3,6.1z"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5,8.8l0-0.7"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.3,10.2l0-0.7"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.2,8.8l0-0.7"
                        />
                    </g>
                </g>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    x1={8.4}
                    y1={3.1}
                    x2={8.4}
                    y2={0.7}
                />
            </g>
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                x1={0.7}
                y1={0.7}
                x2={8.3}
                y2={0.7}
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                x1={5.2}
                y1={15.4}
                x2={19.3}
                y2={22.3}
            />
            <circle fill="currentColor" cx={5.3} cy={15.4} r={1.7} />
            <circle fill="currentColor" cx={19.4} cy={22.3} r={1.7} />
        </g>
    </Icon>
);

export default ShowerGrabBar;
