import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Luxe: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.6865 3.92303C6.80045 3.79202 6.96557 3.7168 7.13921 3.7168H16.8603C17.0339 3.7168 17.199 3.79202 17.313 3.92303L21.5744 8.8224C21.7708 9.04818 21.7708 9.38415 21.5744 9.60993L12.4704 20.0768C12.3565 20.2078 12.1914 20.283 12.0177 20.283C11.8441 20.283 11.679 20.2078 11.565 20.0768L2.56283 9.72693C2.53548 9.71001 2.50913 9.69067 2.48408 9.66888C2.23405 9.45141 2.20766 9.07243 2.42513 8.8224L6.6865 3.92303ZM4.1904 9.76965L10.8789 17.4595L8.69001 9.76965H4.1904ZM9.93768 9.76965L12.0427 17.1648L14.093 9.76965H9.93768ZM15.3382 9.76965L13.2296 17.3755L19.8451 9.76965H15.3382ZM19.7641 8.56965L17.0835 5.48776L15.4279 8.56965H19.7641ZM14.6039 7.56783L16.0281 4.9168H13.044L14.6039 7.56783ZM11.1006 4.9168H8.21464L9.32206 7.54039L11.1006 4.9168ZM10.074 8.56965H13.801L12.0693 5.62647L10.074 8.56965ZM8.45399 8.56965L7.07562 5.30416L4.23537 8.56965H8.45399Z"
            fill="currentColor"
        />
    </Icon>
);

export default Luxe;
