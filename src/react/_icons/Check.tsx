import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Check: IconComponent = (props) => {
    return (
        <Icon viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8558 6.51569C18.1971 6.79624 18.2464 7.30037 17.9658 7.64169L9.85612 17.5078C9.71136 17.6839 9.49834 17.7899 9.27055 17.7992C9.04276 17.8084 8.82185 17.72 8.66329 17.5562L4.43173 13.1847C4.12444 12.8673 4.13267 12.3608 4.45013 12.0535C4.76759 11.7462 5.27406 11.7545 5.58135 12.0719L9.18937 15.7993L16.7298 6.62571C17.0103 6.28439 17.5145 6.23513 17.8558 6.51569Z"
                fill="currentColor"
            />
        </Icon>
    );
};

export default Check;
