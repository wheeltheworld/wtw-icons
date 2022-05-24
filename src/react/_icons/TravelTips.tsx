import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const TravelTips: IconComponent = (props) => (
    <Icon {...props} fill="none" viewBox="0 0 23 22">
        <g fill="none">
            <path
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M20.629 1.691a2.333 2.333 0 00-3.313 0l-3.838 3.837L5.855 2.9c-.21-.052-.42 0-.526.105L3.121 5.213a.508.508 0 000 .736C3.173 6 3.173 6 3.226 6L9.64 9.733l-3.785 3.784-2.524-.158a.597.597 0 00-.42.158l-1.42 1.419a.508.508 0 000 .736l.105.105 3.155 1.787 1.787 3.153c.158.263.473.368.684.21a.113.113 0 00.105-.105l1.525-1.471a.597.597 0 00.157-.42l-.157-2.524 3.785-3.784 3.733 6.412c.158.263.473.316.736.21.053 0 .053-.052.105-.052l2.209-2.207c.157-.158.21-.368.105-.526l-2.63-7.62 3.839-3.837c.841-.947.788-2.418-.105-3.312z"
            ></path>
        </g>
    </Icon>
);

export default TravelTips;
