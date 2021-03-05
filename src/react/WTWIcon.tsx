import React, { SVGProps } from 'react';
import icons, { TIconList } from './icons';

export interface WTWIconProps extends SVGProps<SVGSVGElement> {
    icon: TIconList;
}

const WTWIcon: React.FC<WTWIconProps> = ({ icon, ...props }) => {
    return React.createElement(icons[icon], props);
};

export default WTWIcon;
