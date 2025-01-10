import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Phone: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.20818 4.339C8.83836 4.21297 9.55995 4.56369 9.80868 5.16932L11.2559 8.69308C11.5249 9.26162 11.3557 9.84009 10.9812 10.2193L9.93234 11.3138C10.2916 11.8583 10.7125 12.3849 11.1645 12.8369C11.6166 13.2889 12.1431 13.7098 12.6876 14.0691L13.7823 13.0201C13.9897 12.8155 14.2427 12.697 14.4721 12.6396C14.7123 12.5796 15.0211 12.5593 15.2976 12.6779L18.8356 14.1941C19.5461 14.4841 19.7812 15.1996 19.6624 15.7932C19.4732 16.7393 19.1505 17.6771 18.8966 18.6081C18.7475 19.2835 18.172 19.688 17.5343 19.688C14.1496 19.688 10.7269 18.001 8.33868 15.6773L8.32416 15.6627C6.01805 13.2926 4.31348 9.83 4.31348 6.46712C4.31348 5.82947 4.71798 5.25392 5.3933 5.10486C6.32431 4.85095 7.26215 4.52821 8.20818 4.339ZM8.45611 5.82433L5.81966 6.54336C6.02393 9.60753 7.27233 12.4273 9.39208 14.6093C11.5824 16.7371 14.4657 18.039 17.4575 18.1839L18.1775 15.544L14.8186 14.1045L13.3055 15.5546C13.0638 15.7862 12.6978 15.8296 12.4086 15.661C11.599 15.1887 10.7869 14.5805 10.1039 13.8976C9.42089 13.2146 8.81277 12.4025 8.34047 11.5928C8.17179 11.3036 8.21518 10.9377 8.44682 10.696L9.85392 9.22769L8.45611 5.82433Z"
            fill="currentColor"
        />
    </Icon>
);

export default Phone;
