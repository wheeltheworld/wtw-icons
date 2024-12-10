import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const RoomIllustration: IconComponent = ({ fill = 'currentColor', stroke = 'currentColor', ...props }) => (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7715 8.03344C16.8658 7.67099 17.193 7.41797 17.5675 7.41797H20.0798C20.4543 7.41797 20.7815 7.67099 20.8757 8.03344L21.5022 10.4433C21.6376 10.9642 21.2445 11.4726 20.7063 11.4726H19.4961V12.1002H20.8403C21.2945 12.1002 21.6627 12.4683 21.6627 12.9225V15.3948C21.6627 15.849 21.2945 16.2172 20.8403 16.2172H20.82V17.0484H19.6138V16.2172H18.0632V17.0484H16.857V16.2124C16.4449 16.1679 16.124 15.8188 16.124 15.3948V12.9225C16.124 12.4683 16.4922 12.1002 16.9464 12.1002H18.2899V11.4726H16.941C16.4028 11.4726 16.0096 10.9642 16.145 10.4433L16.7715 8.03344ZM17.8642 8.62415L17.4373 10.2664H20.21L19.783 8.62415H17.8642ZM17.3302 15.0111V13.3063H20.4565V15.0111H17.3302Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.7983 10.1031V11.8727C2.83612 12.3146 2.16797 13.2868 2.16797 14.415V18.2642H3.37415V17.6517H14.0387V18.2642H15.2449V14.415C15.2449 13.4148 14.7198 12.5373 13.9303 12.0431V10.1031C13.9303 9.64887 13.5621 9.28067 13.1079 9.28067H4.62069C4.1665 9.28067 3.7983 9.64887 3.7983 10.1031ZM5.00448 10.4868V11.6188H12.4487C12.5417 11.6188 12.6335 11.6233 12.7241 11.6322V10.4868H5.00448ZM14.0387 16.4456V15.8474H3.37415V16.4456H14.0387ZM14.0387 14.415V14.6412H3.37415V14.415C3.37415 13.5368 4.08599 12.825 4.96411 12.825H12.4487C13.3268 12.825 14.0387 13.5368 14.0387 14.415Z"
            fill="currentColor"
        />
    </Icon>
);

export default RoomIllustration;
