import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MeasuringTape: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
         <g
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        clipPath="url(#clip0)"
      >
        <path
          strokeLinecap="round"
          d="M23 15.874v5.34H3.266C2.023 21.215 1 20.116 1 18.78v-4.712C1 10.141 3.924 7 7.578 7c3.654 0 6.578 3.22 6.578 7.147l-.073 6.91"
        ></path>
        <path d="M14.156 18.073H23M7.505 17.602c1.776 0 3.216-1.547 3.216-3.455 0-1.909-1.44-3.456-3.216-3.456-1.776 0-3.216 1.547-3.216 3.456 0 1.908 1.44 3.455 3.216 3.455z"></path>
        <path
          strokeLinecap="round"
          d="M20.515 19.094v-.864M18.468 19.094v-.864M16.276 19.094v-.864"
        ></path>
      </g>
    </Icon>
);

export default MeasuringTape;
