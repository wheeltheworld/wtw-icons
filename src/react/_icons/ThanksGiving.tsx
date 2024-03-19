import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const ThanksGiving: IconComponent = ({ fill = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 25 25" {...props}>
        <path
            fill={fill}
            fillRule="evenodd"
            d="M16.101 6.388l1.96 12.019 2.688-.006a.77.77 0 01.003 1.538l-2.44.005.002.013h-5.63l-8.234.019a.769.769 0 11-.003-1.538l2.622-.006L9.032 6.388h7.07zm-6.463 4.4l.696-2.9H14.8l.556 3.292h-1.001a.8.8 0 00-.022 0 1.953 1.953 0 00-3.555.05.767.767 0 00-.272-.05h-.924l.056-.392zm4.882 1.93h1.096l.204 1.209h-1.3v-1.21zm1.557 2.747h.003l.498 2.945-8.026.018.422-2.963h1.763a.79.79 0 00.08-.004 1.953 1.953 0 003.498.004h1.762zm-5.463-1.538V12.71a.778.778 0 01-.108.008H9.364l-.172 1.209h1.422zm2.755-1.779a.769.769 0 00-1.538 0v2.03a.77.77 0 101.538 0v-2.03z"
            clipRule="evenodd"
        ></path>
    </Icon>
);

export default ThanksGiving;
