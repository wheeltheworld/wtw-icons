import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Luxe: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 25 25" {...props}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M6.833 3.275a.75.75 0 01.592-.29h9.55a.75.75 0 01.592.29l4.186 5.38c.21.27.21.65 0 .921L12.81 21.07a.75.75 0 01-1.184 0L2.794 9.719a.75.75 0 01-.146-1.064l.017-.023 4.168-5.357zM4.77 9.815H8.81l1.966 7.722L4.77 9.814zm8.955 7.638l5.943-7.639h-4.049l-1.894 7.639zm2.05-9.139h3.813L17.23 5.285l-1.455 3.03zm.177-3.829h-2.513l1.313 2.496 1.2-2.496zm-2.193 3.83l-1.5-2.851-1.73 2.85h3.23zM9.606 6.942l1.49-2.458H8.679l.928 2.458zM7.31 5.106L4.813 8.314H8.52L7.309 5.106zm3.05 4.708h3.714l-1.833 7.389-1.881-7.389z"
            clipRule="evenodd"
        ></path>
    </Icon>
);

export default Luxe;
