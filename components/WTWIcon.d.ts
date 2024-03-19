import React, { SVGProps } from 'react';
import { IconTag } from '../types';
export interface WTWIconProps extends SVGProps<SVGSVGElement> {
    icon: IconTag;
}
declare const WTWIcon: React.FC<WTWIconProps>;
export default WTWIcon;
