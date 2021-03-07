import React, { SVGProps } from 'react';
import { iconsObject } from '../helpers';
import { IconTag } from '../types';

export interface WTWIconProps extends SVGProps<SVGSVGElement> {
    icon: IconTag;
}

const WTWIcon: React.FC<WTWIconProps> = ({ icon, ...props }) => {
    return React.createElement(iconsObject[icon], props);
};

export default WTWIcon;
