import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Garden: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V10.1515C13.5213 9.47692 14.5311 9.06815 15.6363 9.06815H16.3636C16.7778 9.06815 17.1136 9.40393 17.1136 9.81815V11.2727C17.1136 13.6876 15.162 15.6467 12.75 15.6589V16.3409C14.5037 16.3516 15.9648 17.5959 16.3093 19.2499H19.9998C20.414 19.2499 20.7498 19.5857 20.7498 19.9999C20.7498 20.4141 20.414 20.7499 19.9998 20.7499H15.6362C15.222 20.7499 14.8862 20.4141 14.8862 19.9999C14.8862 18.8074 13.9196 17.8408 12.7272 17.8408C11.826 17.8408 11.0532 18.3949 10.7303 19.1859C10.639 19.4094 10.4459 19.5753 10.2112 19.6317C9.97651 19.6881 9.72902 19.6281 9.54621 19.4705C9.41526 19.3577 9.25813 19.2953 9.09085 19.2953C8.70175 19.2953 8.38632 19.6108 8.38632 19.9999C8.38632 20.4141 8.05054 20.7499 7.63632 20.7499H4C3.58579 20.7499 3.25 20.4141 3.25 19.9999C3.25 19.5857 3.58579 19.2499 4 19.2499H7.01718C7.32406 18.4016 8.13668 17.7954 9.09085 17.7954C9.3179 17.7954 9.53501 17.8306 9.73818 17.8943C10.118 17.3551 10.6398 16.9224 11.25 16.652V12.0226C8.83788 12.0105 6.88623 10.0513 6.88623 7.63635V6.18182C6.88623 5.76761 7.22202 5.43182 7.63623 5.43182H8.3635C9.46881 5.43182 10.4786 5.84066 11.25 6.51535V4C11.25 3.58579 11.5858 3.25 12 3.25ZM12.75 14.1589V13.4545C12.75 11.868 14.03 10.5805 15.6136 10.5682V11.2727C15.6136 12.8592 14.3336 14.1467 12.75 14.1589ZM8.38623 7.63635V6.93191C9.96983 6.94413 11.2498 8.23166 11.2498 9.81815V10.5226C9.66622 10.5104 8.38623 9.22284 8.38623 7.63635Z"
            fill="currentColor"
        />
    </Icon>
);

export default Garden;
