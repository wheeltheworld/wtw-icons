import { SVGProps } from 'react';
import { iconsArray } from './helpers';

export type IconComponentProps = SVGProps<SVGSVGElement>;

export type IconComponent = React.FC<IconComponentProps>;

export type IconTag = typeof iconsArray[number];

export { WTWIconProps } from './components/WTWIcon';
