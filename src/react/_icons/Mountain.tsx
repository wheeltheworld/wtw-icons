import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Mountain: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <g>
            <g stroke="currentColor">
            <path d="M22.577 23.044l-4.306-6.92a.187.187 0 00-.317 0L15.51 19.96a.178.178 0 01-.243.065.179.179 0 01-.066-.065l-5.698-9.671a.187.187 0 00-.318 0L.623 23.044a.13.13 0 00.105.203h21.735a.13.13 0 00.12-.066.131.131 0 00-.006-.137zM10.53 16.027l2.181 3.671M18.703 19.828l.936 1.58"></path>
      </g>
      <defs>
        <clipPath>
          <path fill="currentColor" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
        </g>
    </Icon>
);

export default Mountain;
