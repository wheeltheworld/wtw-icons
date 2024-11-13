import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MissingAlt: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.95264C7.55555 3.95264 3.95264 7.55555 3.95264 12C3.95264 16.4444 7.55555 20.0473 12 20.0473C16.4444 20.0473 20.0473 16.4444 20.0473 12C20.0473 7.55555 16.4444 3.95264 12 3.95264ZM11.2499 12.7408C11.2499 13.155 11.5857 13.4908 11.9999 13.4908C12.4141 13.4908 12.7499 13.155 12.7499 12.7408L12.7499 8.35132C12.7499 7.93711 12.4141 7.60132 11.9999 7.60132C11.5857 7.60132 11.2499 7.93711 11.2499 8.35132L11.2499 12.7408ZM11.9998 14.9356C11.5958 14.9356 11.2682 15.2631 11.2682 15.6672C11.2682 16.0712 11.5958 16.3987 11.9998 16.3987C12.4038 16.3987 12.7314 16.0712 12.7314 15.6672C12.7314 15.2631 12.4038 14.9356 11.9998 14.9356Z"
            fill="currentColor"
        />
    </Icon>
);

export default MissingAlt;
