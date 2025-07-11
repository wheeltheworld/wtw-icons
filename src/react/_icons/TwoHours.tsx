import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TwoHours: IconComponent = (props) => (
    <Icon fill="none" viewBox="0 0 24 24" {...props}>
        <path d="M16.1826 7.81744C15.0733 6.70815 13.5688 6.08496 12 6.08496V12L16.1826 7.81744Z" fill="currentColor" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.051 3.38672C7.18253 3.38672 3.23584 7.33341 3.23584 12.2019C3.23584 17.0704 7.18253 21.0171 12.051 21.0171C16.9195 21.0171 20.8662 17.0704 20.8662 12.2019C20.8662 7.33341 16.9195 3.38672 12.051 3.38672ZM4.73584 12.2019C4.73584 8.16184 8.01096 4.88672 12.051 4.88672C16.0911 4.88672 19.3662 8.16184 19.3662 12.2019C19.3662 16.242 16.0911 19.5171 12.051 19.5171C8.01096 19.5171 4.73584 16.242 4.73584 12.2019Z"
            fill="currentColor"
        />
    </Icon>
);

export default TwoHours;
