import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Copy: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 3.25C4.48122 3.25 3.25 4.48122 3.25 6V12C3.25 13.5188 4.48122 14.75 6 14.75H8.25V17C8.25 18.5188 9.48122 19.75 11 19.75H17C18.5188 19.75 19.75 18.5188 19.75 17V11C19.75 9.48122 18.5188 8.25 17 8.25H14.75V6C14.75 4.48122 13.5188 3.25 12 3.25H6ZM14.75 9.75V12C14.75 13.5188 13.5188 14.75 12 14.75H9.75V17C9.75 17.6904 10.3096 18.25 11 18.25H17C17.6904 18.25 18.25 17.6904 18.25 17V11C18.25 10.3096 17.6904 9.75 17 9.75H14.75ZM4.75 6C4.75 5.30964 5.30964 4.75 6 4.75H12C12.6904 4.75 13.25 5.30964 13.25 6V12C13.25 12.6904 12.6904 13.25 12 13.25H6C5.30964 13.25 4.75 12.6904 4.75 12V6Z"
            fill="currentColor"
        />
    </Icon>
);

export default Copy;
