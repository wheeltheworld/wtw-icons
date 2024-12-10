import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ShareArrow: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
            d="M13.8551 8.79314L12.582 8.99628C7.72889 9.77068 4.87918 12.9187 3.84069 17.0026C3.81956 17.0857 3.92304 17.139 3.97929 17.0743C6.67957 13.9678 9.6824 12.4572 13.905 13.6205C14.0752 13.6674 14.1921 13.8241 14.1921 14.0007V16.3189C14.1921 16.6821 14.6371 16.8573 14.8847 16.5917L19.9517 11.5489C20.1071 11.3822 20.092 11.1196 19.9186 10.9717L14.8516 6.25897C14.5919 6.03759 14.1921 6.22213 14.1921 6.56337V8.39814C14.1921 8.59472 14.0492 8.76217 13.8551 8.79314Z"
            fill="currentColor"
        />
    </Icon>
);

export default ShareArrow;
