import { SVGProps } from 'react';
import { iconsArray } from './helpers';
export declare type IconComponentProps = SVGProps<SVGSVGElement>;
export declare type IconComponent = React.FC<IconComponentProps>;
export declare type IconTag = typeof iconsArray[number];
export { WTWIconProps } from './components/WTWIcon';
