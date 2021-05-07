import React from 'react';
    import Icon from '../components/Icon';
    import { IconComponent } from '../types';
    
    const ProfileOutline: IconComponent = (props) => (
        <Icon viewBox="0 0 50 50" fill="none" {...props}>
            <g><circle cx={25} cy={25} r={24} stroke="currentColor" strokeWidth={2} /><g clipPath="url(#clip0)"><path d="M34.885 35.3913V32.495C34.885 29.7511 32.7198 27.6169 29.9359 27.6169H19.7282C16.9443 27.6169 14.779 29.7511 14.779 32.495V35.3913" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" /><path d="M24.8321 23.1964C27.8217 23.1964 30.2452 20.8076 30.2452 17.861C30.2452 14.9144 27.8217 12.5256 24.8321 12.5256C21.8424 12.5256 19.4189 14.9144 19.4189 17.861C19.4189 20.8076 21.8424 23.1964 24.8321 23.1964Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} /></g><defs><clipPath id="clip0"><rect width={22.5806} height={25} fill="white" transform="translate(13.5417 11.4584)" /></clipPath></defs></g>
        </Icon>
    );
    
    export default ProfileOutline;
    