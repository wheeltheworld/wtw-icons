import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const PlusBig: IconComponent = (props: any) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            d="M11.9999 7.59209C12.4142 7.59209 12.7499 7.92787 12.7499 8.34209V11.25H15.6575C16.0718 11.25 16.4075 11.5858 16.4075 12C16.4075 12.4142 16.0718 12.75 15.6575 12.75H12.7499V15.6578C12.7499 16.0721 12.4142 16.4078 11.9999 16.4078C11.5857 16.4078 11.2499 16.0721 11.2499 15.6578V12.75H8.3418C7.92758 12.75 7.5918 12.4142 7.5918 12C7.5918 11.5858 7.92758 11.25 8.3418 11.25H11.2499V8.34209C11.2499 7.92787 11.5857 7.59209 11.9999 7.59209Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0473 12C20.0473 16.4444 16.4444 20.0473 12 20.0473C7.55555 20.0473 3.95264 16.4444 3.95264 12C3.95264 7.55555 7.55555 3.95264 12 3.95264C16.4444 3.95264 20.0473 7.55555 20.0473 12ZM12 18.5473C15.616 18.5473 18.5473 15.616 18.5473 12C18.5473 8.38398 15.616 5.45264 12 5.45264C8.38398 5.45264 5.45264 8.38398 5.45264 12C5.45264 15.616 8.38398 18.5473 12 18.5473Z"
            fill="currentColor"
        />
    </Icon>
);

export default PlusBig;
